import React from 'react';
interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export declare const Card: React.FC<CardProps>;
export declare const CardHeader: React.FC<CardProps>;
export declare const CardTitle: React.FC<CardProps>;
export declare const CardContent: React.FC<CardProps>;
export {};
