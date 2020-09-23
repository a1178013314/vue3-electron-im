const rm = require('rimraf');
const { resolve } = require('path')
const fs = require('fs')


const distPath = resolve(__dirname, '../dist/main')
const srcPath = resolve(__dirname, '../src/main')


function clearProject() {
  new Promise((reslove) => {
    rm(distPath, err => {
      if (err) { throw err };
      reslove()
    })
  })
}


async function initialize() {
  await clearProject()
}

initialize()