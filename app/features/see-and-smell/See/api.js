
class Api {
  static extractKeyWord (data) {
    return new Promise((resolve, reject) => {
      if (!data) {
        return reject(new Error({error: 'no transcription returned'}))
      } else if (data === '') {
        return resolve({success: false, message: 'no transcription returned'})
      } else {
        let n = data.split(' ')

        let key = n[n.length - 1]
        return resolve({success: true, message: 'keyword valid and extracted', data, key})
      }
    })
  }

  static checkGoogleMapReady () {
    return new Promise((resolve, reject) => {
      var goRoot = document.createElement('div')
      goRoot.id = 'google-root'

      document.head.appendChild(goRoot);

      (function (d, s, id) {
        const element = d.getElementsByTagName(s)[0]
        const ljs = element
        var js = element
        if (d.getElementById(id)) {
          return
        }
        js = d.createElement(s)
        js.id = id
        js.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBnk7smY3mIjOQ3KQF1Ntb7hWrgwqoZ0Hw'
        ljs.parentNode.insertBefore(js, ljs)
      }(document, 'script', 'google'))
      resolve({success: true})
    })
  }
}

export default Api
