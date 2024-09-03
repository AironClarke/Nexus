import dynamic from 'next/dynamic';

const processDir = {HelloWorld: { Component: dynamic(() => import('app/HelloWorld')) }};

export default processDir;
