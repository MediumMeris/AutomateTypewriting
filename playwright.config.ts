import { PlaywrightTestConfig, devices } from '@playwright/test'


const config: PlaywrightTestConfig = {


    projects: [
      {
        name: "firefox",
        use: {
          ...devices["Desktop Firefox"],
          viewport: {
            width: 1920,
            height: 1080,
          },
        },
      },
      
    ],


    testMatch: ["tests/Autowrite.test.ts"],

    use: {
        headless: false,
        screenshot: "on",
        video: "on",   
    },
    
    fullyParallel: true,
    retries: 0,

    reporter: [
    ["dot"], 

     ["json", {
         outputFile: "jsonReports/jsonReport.json"
     }], 

    ["html", {
        open: "always"
    }]
]

};


export default config;