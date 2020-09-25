function ProjectPlugin(){
  if(typeof global === 'undefined'){
    window.require = function(name){
      console.warn(`---在浏览器打开库:${name},无法使用会影响部分功能`)
      return {}
    }
  }
}
export default ProjectPlugin()