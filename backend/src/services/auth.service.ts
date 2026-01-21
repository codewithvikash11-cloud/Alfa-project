import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient, User, Role } from '@prisma/client';
import { config } from '../config/env';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export const generateTokens = (user: User) => {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
        organizationId: user.organizationId,
    };

    const accessToken = jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiresIn as any });
    const refreshToken = jwt.sign(payload, config.jwtRefreshSecret, { expiresIn: config.jwtRefreshExpiresIn as any });

    return { accessToken, refreshToken };
};

export const registerUser = async (data: any) => {
    const { email, password, name } = data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            credits: {
                create: {
                    freeBalance: 5 // Default free credits
                }
            }
        },
    });

    return user;
};

export const loginUser = async (data: any) => {
    const { email, password } = data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    const tokens = generateTokens(user);
    return { user, tokens };
};

export const refreshAccessToken = async (token: string) => {
    try {
        const decoded = jwt.verify(token, config.jwtRefreshSecret) as any;
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!user) throw new Error('User not found');

        const tokens = generateTokens(user);
        return tokens;
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
}
