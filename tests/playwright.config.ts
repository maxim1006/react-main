import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const isCI = !!process.env.CI;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testDir: './e2e',
    testMatch: /.*\.(smoke|regression|e2e)\.ts$/,
    /* Maximum time one test can run for. */
    timeout: 5 * 60 * 1000,
    /* Retry on CI only */
    retries: isCI ? 2 : 0,
    reportSlowTests: null,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: isCI,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000,
    },
    /* Run tests in files in parallel */
    // fullyParallel: true,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        ignoreHTTPSErrors: true,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        permissions: [],
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 30 * 1000,
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://localhost:3000',
    },

    /* Configure projects for major browsers */
    projects: [
        // {
        //     name: 'chromium',
        //     use: {
        //         ...devices['Desktop Chrome'],
        //     },
        // },

        // {
        //   name: 'firefox',
        //   use: {
        //     ...devices['Desktop Firefox'],
        //   },
        // },

        // {
        //     name: 'webkit',
        //     use: {
        //         ...devices['Desktop Safari'],
        //     },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: {
        //     ...devices['Pixel 5'],
        //   },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: {
        //     ...devices['iPhone 12'],
        //   },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: {
        //     channel: 'msedge',
        //   },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: {
        //     channel: 'chrome',
        //   },
        // },

        {
            name: 'chrome:mobile',
            use: {
                ...devices['Pixel 5'],
            },
        },
        // {
        //     name: 'firefox:mobile',
        //     use: {
        //         ...devices['Desktop Firefox'],
        //         viewport: {
        //             width: 393,
        //             height: 727,
        //         },
        //         deviceScaleFactor: 2.75,
        //     },
        // },
        // {
        //     name: 'safari:mobile',
        //     use: {
        //         ...devices['iPhone 13'],
        //     },
        // },
    ],

    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    // outputDir: 'test-results/',

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   port: 3000,
    // },
};

export default config;
