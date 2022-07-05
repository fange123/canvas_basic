import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'
import tankTop from './static/images/tank/top.gif'
import tankRight from './static/images/tank/right.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'
import bullet from './static/images/bullet/bullet.jpg'
import boss from './static/images/boss/boss.png'
//* 基本配置
export default {

  timeout:10,//* 坦克移动时间
  // * 画布的基本配置
  canvas:{
    width:900,
    height:600
  },

  // * 模型的基本配置
  model:{
    width:30,
    height:30

  },

  straw:{
    num:180,//* 草坪数量
  },
  wall:{
    num:20,//* 砖墙数量
  },
  water:{
    num:15,//* 水坑数量
  },
  steel:{
    num:10,//* 白墙数量
  },
  tank:{
    num:5,//* 坦克数量
  },
  boss:{
  num:1//* boss数量
},

  //*图片
  images:{
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft,
    bullet,
    boss

  }
}
