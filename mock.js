// mock 数据

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'eat',
          title: '吃饭',
        }, {
          id: 'sleep',
          title: '睡觉',
        }, {
          id: 'playdoudou',
          title: '打豆豆',
        },
      ])
    })
  }, 500)
}