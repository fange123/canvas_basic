import config from '../config'

//* 图片处理的服务
//类型提示
type mapKey = keyof typeof config.images

export const image = new Map<mapKey,HTMLImageElement>()



export const promise =  Object.entries(config.images).map(([key,value])=>{
  //* 加载图片是一个异步过程，所以返回一个Promise比较好
  //* 最后返回的是promise的数组
  return new Promise((resolve) =>{
    const img = document.createElement('img')
    img.src = value
    img.addEventListener('load',()=> {
      //* 图片加载完毕，设置到image里面
      image.set(key as mapKey,img)//key的类型断言一下
      resolve(img)
    })
  })

})
