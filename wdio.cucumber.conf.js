export const config = {
    runner: 'local',
    specs: [
        './test/features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',

    framework: 'cucumber',
    cucumberOpts: {
        require: ['./test/features/step-definitions/*.js'],
        format: ['pretty'],
        timeout: 60000
    },
    reporters: ['spec'],
    services: [],

    before: async function () {
        await browser.setWindowSize(1920, 1080);
    }
};
