import { useState } from 'react';

export default function Week01() {
  /**
  * The state representing the selected product
  * @type {{
  *   category: string,
  *   content: string,
  *   description: string,
  *   id: string,
  *   is_enabled: number,
  *   origin_price: number,
  *   price: number,
  *   title: string,
  *   unit: string,
  *   num: number,
  *   imageUrl: string,
  *   imagesUrl: string[],
  * }} 
  */
  const [tempProduct, setTempProduct] = useState(null);

  /**
  * The state representing the list of products
  * @type {[{
  *   category: string,
  *   content: string,
  *   description: string,
  *   id: string,
  *   is_enabled: number,
  *   origin_price: number,
  *   price: number,
  *   title: string,
  *   unit: string,
  *   num: number,
  *   imageUrl: string,
  *   imagesUrl: string[],
  * }]}
  */
  const products = [
    {
      category: "甜甜圈",
      content: "尺寸：14x14cm",
      description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
      id: "-L9tH8jxVb2Ka_DYPwng",
      is_enabled: 1,
      origin_price: 150,
      price: 99,
      title: "草莓莓果夾心圈",
      unit: "元",
      num: 10,
      imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8",
      imagesUrl: [
        "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
        "https://images.unsplash.com/photo-1559656914-a30970c1affd"
      ]
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
      id: "-McJ-VvcwfN1_Ye_NtVA",
      is_enabled: 1,
      origin_price: 1000,
      price: 900,
      title: "蜂蜜檸檬蛋糕",
      unit: "個",
      num: 1,
      imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      imagesUrl: [
        "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      ]
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
      id: "-McJ-VyqaFlLzUMmpPpm",
      is_enabled: 1,
      origin_price: 700,
      price: 600,
      title: "暗黑千層",
      unit: "個",
      num: 15,
      imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      imagesUrl: [
        "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      ]
    }
  ];

  /**
   * Click the product card to show the product detail
   * @param {object} e - the event object
   * @function
   */
  const handleShowDetail = (e) => {
    try {
      const { id } = e.target;
      const product = products.find((product) => {
        return product.id === id;
      });
      setTempProduct(product);
    } catch (error) {
      console.error(`handle show detail error: ${error}`);
    }
  };
  return (
    <div className="container max-w-[980px] w-full mx-auto box-border">
      <div className="mt-5 grid grid-rows-[auto_auto] lg:grid-cols-[1fr_300px] gap-2 mb-8 ">
        <div className="p-4 rounded-sm bg-slate-200 text-slate-800">
          <h2 className="text-3xl mb-4">產品列表</h2>
          <table className="table mx-auto">
            <thead>
              <tr>
                <th className="py-3 px-3">產品名稱</th>
                <th className="py-3 px-3">原價</th>
                <th className="py-3 px-3">售價</th>
                <th className="py-3 px-3">是否啟用</th>
                <th className="py-3 px-3">查看細節</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, _i) => (
                <tr key={product.id}>
                  <td className="py-3 px-3">{product.title}</td>
                  <td className="py-3 px-3">{product.origin_price}</td>
                  <td className="py-3 px-3">{product.price}</td>
                  <td className="py-3 px-3">{product.is_enabled ? "是" : "否"}</td>
                  <td>
                    <button id={product.id} className="rounded py-1 px-3 bg-blue-600 text-white hover:bg-blue-700 transition-all ease-linear duration-100" onClick={handleShowDetail}>查看細節</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 rounded-sm bg-slate-200 text-slate-800">
          <h2 className="text-3xl mb-4">單一產品細節</h2>
          {tempProduct ? (
            <div className="mb-3">
              <img src={tempProduct.imageUrl} className="w-72 h-72 mx-auto mb-2 max-w-full object-cover object-center" alt="主圖" />
              <div>
                <div className="flex flex-row items-center justify-center mb-2">
                  <h5 className="text-xl font-bold">
                    {tempProduct.title}
                  </h5>
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-sm ml-2">{tempProduct.category}</span>
                </div>
                <p className="text-center mb-2">{tempProduct.description}</p>
                <p className="text-left mb-2">內容：{tempProduct.content}</p>
                <div className="flex flex-row justify-start mb-2">價格：
                  <del className="text-slate-600 mr-2">{tempProduct.origin_price} 元</del> /
                  <span className="ml-2">
                    {tempProduct.price} 元
                  </span>
                </div>
                <h5 className="text-left mb-2">更多圖片：</h5>
                <div className="flex justify-start gap-2">
                  {tempProduct.imagesUrl.map((imgUrl, index) => {
                    return (
                      <img src={imgUrl} alt={tempProduct.title} className="w-24 h-24 object-cover object-center" key={index} />
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-slate-600">請選擇一個商品查看</p>
          )}
        </div>
      </div>
      <a href="/" className="block w-32 mx-auto rounded bg-slate-600 py-2 px-3">Back to Home</a>
    </div>
  );
}