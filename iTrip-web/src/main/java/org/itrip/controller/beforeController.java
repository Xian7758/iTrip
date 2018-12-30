package org.itrip.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.font.FontRenderContext;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Random;
import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.itrip.pojo.Hotel;
import org.itrip.pojo.Room;
import org.itrip.pojo.User;
import org.itrip.service.BeforeService;
import org.itrip.service.HotelService;
import org.itrip.service.impl.HotelServiceImpl;
import org.itrip.utils.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/Account")
public class beforeController {

	@Autowired
	BeforeService beforeService;

	@Autowired
	HotelService hotelService;

	@RequestMapping("/login")
	public String login() {
		System.out.println("跳转****************");
		return "login";
	}

	@RequestMapping("/zhuce")
	public String zhuce() {
		System.out.println("跳转注册****************");
		return "zhuce";
	}

	@RequestMapping("/map")
	public String map() {
		return "Map";
	}

	@RequestMapping("/Register")
	public String Register() {
		System.out.println("跳转注册****************");
		return "zhuce";
	}

	// 登录
	@RequestMapping("/LogOn")
	public String checkLogin(HttpServletRequest request, Model model, HttpSession session) throws IOException {
		System.out.println("login********************");
		String name = request.getParameter("UserName");
		String pwd = request.getParameter("Password");
		String MD5 = MD5Utils.calc(pwd);
		String verifyCode = request.getParameter("verifyCode");

		String sessionVerifyCode = (String) session.getAttribute("verifyCodeValue");
		if (!verifyCode.equalsIgnoreCase(sessionVerifyCode)) {
			System.out.println("<--登录失败,验证码输入有误！-->");
			model.addAttribute("message", "请输入正确的验证码！");
			return "/login";
		} else {
			User user = new User();
			user = beforeService.checkLogin(name, pwd);
			if (user != null) {
				if (MD5.equals(user.getPassword()) && user.getUserName().equals(name)) {
					model.addAttribute("user", user);
					System.out.println("11111s");
					return "redirect:/Account/hlist";
				} 
			}else {
				model.addAttribute("message", "账号或密码有误！");
				return "login";
			}
		}
		return "login";

	}

	@RequestMapping("/RegPost")
	public String regUsers(HttpServletRequest request, Model model, HttpSession session) {

		String name = request.getParameter("Name");
		String pwd = request.getParameter("Password2");
		String MD5 = MD5Utils.calc(pwd);
		String contact = request.getParameter("Mobile");
		String usertypeId = request.getParameter("usertypeId");
		String money = request.getParameter("money");
		String ConfirmPassword = request.getParameter("ConfirmPassword");
		String verifyCode = request.getParameter("verifyCode");

		String sessionVerifyCode = (String) session.getAttribute("verifyCodeValue");
		if (!verifyCode.equalsIgnoreCase(sessionVerifyCode)) {
			System.out.println("<--登录失败,验证码输入有误！-->");
			return "redirect:/Account/login";
		} else {

			beforeService.regUser(name, MD5, contact, Integer.valueOf(usertypeId), Float.valueOf(money));
			return "login";
		}

	}

	@RequestMapping("/hlist")
	public String qhotel(@RequestParam(value = "id") String id, HttpServletRequest request, Model model,
			HttpSession session) {
		int ids = 0;
		if (id != null) {
			ids = Integer.valueOf(id);
		}
		Hotel map = hotelService.qhotel(ids);
		model.addAttribute("map", map);
		List<Room> room = hotelService.rlist(ids);
		if (room != null) {
			System.out.println("ok");
		}
		model.addAttribute("room", room);
		request.setAttribute("room", room);
		if (map != null) {
			System.out.println("落成");
		}
		return "KunmingQC";
	}

	/* 获取校验码 */
	@RequestMapping("/getVerifyCode")
	public void generate(HttpServletResponse response, HttpSession session) {
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		String verifyCodeValue = drawImg(output);
		// 将校验码保存到session中
		session.setAttribute("verifyCodeValue", verifyCodeValue);
		System.out.println("调用方法");
		try {
			ServletOutputStream out = response.getOutputStream();
			output.writeTo(out);
		} catch (IOException e) {
			/* logger.info("<--验证码前端写出.出现异常-->"); */

			e.printStackTrace();

		}
	}

	/* 绘制验证码 */
	private String drawImg(ByteArrayOutputStream output) {
		String code = "";
		// 随机产生4个字符
		for (int i = 0; i < 4; i++) {
			code += randomChar();
		}
		int width = 70;
		int height = 25;
		BufferedImage bi = new BufferedImage(width, height, BufferedImage.TYPE_3BYTE_BGR);
		Font font = new Font("Times New Roman", Font.PLAIN, 20);
		// 调用Graphics2D绘画验证码
		Graphics2D g = bi.createGraphics();
		g.setFont(font);
		Color color = new Color(66, 2, 82);
		g.setColor(color);
		g.setBackground(new Color(226, 226, 240));
		g.clearRect(0, 0, width, height);
		FontRenderContext context = g.getFontRenderContext();
		Rectangle2D bounds = font.getStringBounds(code, context);
		double x = (width - bounds.getWidth()) / 2;
		double y = (height - bounds.getHeight()) / 2;
		double ascent = bounds.getY();
		double baseY = y - ascent;
		g.drawString(code, (int) x, (int) baseY);
		g.dispose();
		try {
			ImageIO.write(bi, "jpg", output);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return code;
	}

	/* 获取随机参数 */
	private char randomChar() {
		Random r = new Random();
		String s = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789";
		return s.charAt(r.nextInt(s.length()));
	}

}
