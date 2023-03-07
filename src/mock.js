// mock 数据

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        '吃饭',
        '睡觉',
        '打豆豆'
      ])
    })
  }, 500)
}