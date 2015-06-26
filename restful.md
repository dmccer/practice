# RESTFul 
按 RESTFul 风格设计订单系统的页面地址和前后端交互的 API

## 前后端交互的 API 设计

1. 所有非查询接口，传给服务端的数据均采用 json，服务端返回也是 json：

	Content-Type: application/json

2. `GET` 请求，参数是 querystring，服务端返回 json


### 增/删/改/查资源

* 增 - 新建订单：

		POST /orders
		Payload:
		{
			"through": 1
		}

* 删 - 删除订单：

		DELETE /orders/:order_id
	

* 改 - 修改订单：
	
		// 全部编辑
		PUT /orders/:order_id
	
		// 部分编辑
		PATCH /orders/:order_id

* 查 - 查询订单：
	
		// 查询订单列表
		GET /orders
	
		// 查询单个订单详情
		GET /orders/:order_id


## 服务型资源

* 生效订单：

		// 用户提交订单需要运营补充信息并审核通过才会正式生效
		PUT /orders/:order_id/validation
		Payload:
		{
			"memo": "女性用户"
		}


## 关系型资源

* 添加商品到订单

		POST /orders/:order_id/wares
		Payload:
		{
			ware_id: 1
		}


* 删除订单中的某一商品

		DELETE /orders/:order_id/wares/:ware_id