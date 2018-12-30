package org.itrip.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.itrip.pojo.User;
import org.itrip.service.UserService;
import org.itrip.utils.AliTrade;
import org.itrip.utils.Pay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alipay.api.AlipayApiException;
import com.alipay.api.internal.util.AlipaySignature;

@Controller
public class IndexController {
	
	@Autowired
	UserService userService;
	
	
	@RequestMapping("getList")
	@ResponseBody
	public List<User> getList(){
		return userService.getAll();
	}
	
	/**
	 * 打开支付宝付款页面
	 * @param resp HttpServletResponse对象用于相应表单到浏览器
	 * @throws IOException
	 */
	@RequestMapping("index")
	public void index(HttpServletResponse resp) throws IOException {
		System.out.println("in index");
		resp.setContentType("text/html;charset=utf-8"); 
		PrintWriter out = resp.getWriter();
		//创建业务参数对象
		Pay pay = new Pay();
		//给出业务参数值，我这里是固定的，实际业务中可根据订单情况动态调用
		//订单号，订单号一单创建不可重复，可包含字母、数字、下划线
		pay.setOut_trade_no("21");
		//订单金额
		pay.setTotal_amount(1.0);
		//订单标题
		pay.setSubject("7天酒店北湖店标准套房预定");
		//订单详细
		pay.setBody("7天酒店北湖店标准套房预定");
		//调用自定义支付静态方法返回支付页面表单
		out.println(AliTrade.pay(pay));
	}

	/**
	 * 同步回调方法
	 * @param params 请求参数
	 * @return 根据支付结果返回不同的页面
	 */
	@RequestMapping("return_url")
	public String returnUrl(@RequestParam Map<String,String> params)
			throws AlipayApiException, UnsupportedEncodingException{
		System.out.println("in returnUrl");
		//调用SDK验证签名
		boolean signVerified = AlipaySignature.rsaCheckV1(params, 
					AliTrade.ALIPAY_PUBLIC_KEY, AliTrade.CHARSET, AliTrade.SIGN_TYPE); 
		//——请在这里编写您的程序（以下代码仅作参考）——
		if(signVerified) {
			//此处写支付成功的业务代码
			//返回success.jsp页面
			return "success";
		}else {
			System.out.println("支付, 验签失败...");
		}
		//返回fail页面
		return "fail";
	}
	
	/**
	 *  异步回调方法
	 * @param params 请求参数
	 * @return 根据支付宝文档要求直接响应“success”或“fail”字符串到页面
	 */
	@RequestMapping("notify_url")
	@ResponseBody
	public String notifyUrl(@RequestParam Map<String,String> params) 
			throws UnsupportedEncodingException, AlipayApiException {
		System.out.println("in notifyUrl");
		//调用SDK验证签名
		boolean signVerified = AlipaySignature.rsaCheckV1(params, 
				AliTrade.ALIPAY_PUBLIC_KEY, AliTrade.CHARSET, AliTrade.SIGN_TYPE); 
		/* 实际验证过程建议商户务必添加以下校验：
		1、需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
		2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额），
		3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方
			（有的时候，一个商户可能有多个seller_id/seller_email）
		4、验证app_id是否为该商户本身。
		*/
		//订单状态
		String trade_status = params.get("trade_status");
		if(signVerified) {//验证成功
			if(trade_status.equals("TRADE_FINISHED")){//交易结束
				//判断该笔订单是否在商户网站中已经做过处理
				//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
				//如果有做过处理，不执行商户的业务程序
					
				//注意：
				//退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
			}else if (trade_status.equals("TRADE_SUCCESS")){ //支付成功
				//判断该笔订单是否在商户网站中已经做过处理
				//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
				//如果有做过处理，不执行商户的业务程序
				
				//注意：在此处写付款成功业务代码，如修改数据库中该订单的状态等
				
				
			}
			return "success";
		}else {//验证失败
			return "fail";
		}
	}
}
