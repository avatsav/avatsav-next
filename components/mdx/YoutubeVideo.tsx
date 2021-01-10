import React from 'react';
import {LiteYoutubeEmbed} from 'react-lite-yt-embed';

// Source: https://github.com/alexcarpenter/alexcarpenter-next/blob/main/components/YoutubeVideo/index.tsx

type ResolutionType = 'maxresdefault' | 'sddefault' | 'hqdefault';

interface LiteYouTubeEmbedProps {
    id: string;
    adLinksPreconnect?: boolean;
    defaultPlay?: boolean;
    isPlaylist?: boolean;
    noCookie?: boolean;
    mute?: boolean;
    params?: Record<string, string>;
    isMobile?: boolean;
    mobileResolution?: ResolutionType;
    desktopResolution?: ResolutionType;
    lazyImage?: boolean;
}

export default function YoutubeVideo(props: LiteYouTubeEmbedProps) {
    return <LiteYoutubeEmbed key={props.id} noCookie={true} mute={false} {...props} />;
}