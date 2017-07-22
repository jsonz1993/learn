const fs = require('fs')

module.exports.readFileAsync = (path, encoding)=> {
  return new Promise((resolve, reject)=> {
    fs.readFile(path, encoding, (err, content)=> {
      if (err) reject(err)
      else resolve(content)
    })
  })
}

module.exports.writeFileAsync = (path, content)=> {
  return new Promise((resolve, reject)=> {
    fs.writeFile(path, content, (err)=> {
      if (err) reject(err)
      else resolve()
    })
  })
}