import { NextPage } from 'next';
import path from 'path';
import React, { useState } from 'react';
import OneSignalReact from 'react-onesignal';

const Homepage: NextPage = () => {
  const [initialized, setInitialized] = useState(false);
  OneSignalReact.init({
    appId: 'c89716aa-7ed9-4402-83ba-7ff80bca219a',
    serviceWorkerPath: '/OneSignalSDKWorker.js',
    autoResubscribe: true,
  }).then(() => {
    setInitialized(true);
    OneSignalReact.showSlidedownPrompt().then(() => {
      console.log('Success');
    });
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 p-4 text-center text-white bg-zinc-900">
      <h1 className="text-5xl font-medium">Suma push notifs testing</h1>

      {initialized ? (
        <p>Initialized. You are subscribed and can receive notifications.</p>
      ) : (
        <p>Not initialized yet. You can&apos;t receive notifications.</p>
      )}
    </div>
  );
};

export default Homepage;
