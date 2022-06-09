import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'
import tank from './static/images/tank/bottom.gif'
//* 基本配置
export default {
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
    num:80,//* 草坪数量
  },
  wall:{
    num:40,//* 砖墙数量
  },
  water:{
    num:30,//* 水坑数量
  },
  steel:{
    num:20,//* 白墙数量
  },
  tank:{
    num:10,//* 坦克数量
  },

  //*图片
  images:{
    straw,
    wall,
    water,
    steel,
    tank

  }
}
