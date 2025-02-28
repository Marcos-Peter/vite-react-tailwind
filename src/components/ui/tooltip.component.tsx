import React, { PropsWithChildren } from 'react';

interface TooltipProps {
    position?: PositioningProps;
    content: string;
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({ children, position = 'rightUpOuter', content }) => {
    return (
        <div className='group relative flex p-0 items-center align-baseline justify-center max-w-fit m-auto'>
            <div className='flex'>{children}</div>
            <div
                className={`hidden absolute ${positioning[position]} my-2 p-2 rounded-md bg-amber-50 text-amber-950 group-hover:block text-center w-full`}
            >
                {content}
            </div>
        </div>
    );
};

type PositioningProps =
    | 'leftUpInner'
    | 'leftDownInner'
    | 'leftUpOuter'
    | 'leftDownOuter'
    | 'leftCenterOuter'
    | 'upCenter'
    | 'downCenter'
    | 'rightUpInner'
    | 'rightDownInner'
    | 'rightUpOuter'
    | 'rightDownOuter'
    | 'rightCenterOuter';

const positioning = {
    leftUpInner: 'bottom-full',
    leftDownInner: 'top-full',
    leftUpOuter: 'bottom-full right-full',
    leftDownOuter: 'top-full right-full',
    leftCenterOuter: '-bottom-2 right-full',
    upCenter: 'bottom-full left-1/2 -translate-x-1/2',
    downCenter: 'top-full left-1/2 -translate-x-1/2',
    rightUpInner: 'bottom-full right-0',
    rightDownInner: 'top-full right-0',
    rightUpOuter: 'bottom-full left-full',
    rightDownOuter: 'top-full left-full',
    rightCenterOuter: '-bottom-2 left-full',
};
