import { getFrameHtmlResponse, getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { BASE_URL } from '../lib/constants';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'deploy safe 🚀',
    },
  ],
  image: `${BASE_URL}/init-img.png`,
  post_url: `${BASE_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'safe frame',
  description: 'a farcaster frame integrated with safe',
  openGraph: {
    title: 'safe frame',
    description: 'a farcaster frame integrated with safe',
    images: [`${BASE_URL}/init-img.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        padding: '3.5rem',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <a href="https://builders.garden?utm_source=safe-frame" target="_blank">
        <img src={`${BASE_URL}/builders-garden-logo.png`} height={32} width={104} />
      </a>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#10D63F',
          fontSize: '48px',
          textAlign: 'center',
          fontFamily: 'Raleway-ExtraBold',
        }}
      >
        Safe Frame
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#10D63F',
          fontSize: '24px',
          textAlign: 'center',
          fontFamily: 'Raleway-Bold',
        }}
      >
        Experimenting with the Safe Protocol Kit inside a Farcaster Frame
      </div>
    </div>
  );
}
