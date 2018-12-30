<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
 		String path=request.getContextPath();
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="<%=path %>/Account/LogOn">
	<input type="text" name="username">
	<input type="password" name="password">
	<input type="submit" value="登录">
	</form>
</body>
</html>