export default {
  el(el:string):HTMLAudioElement{
    return document.querySelector(el)!
  },
// * 游戏开始声音
  start(){
    this.el("#aStart").play()
  },
// * 游戏结束声音
  fire(){
    this.el("#aFire").play()
  },

// * 子弹打中爆炸的声音
  blast(){
    this.el("#aBlast").play()
  }

}
