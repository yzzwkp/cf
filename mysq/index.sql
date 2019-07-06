SET NAMES UTF8;
#丢弃指定的数据库，如果存在
DROP DATABASE IF EXISTS cf_index;
#创建数据库

CREATE DATABASE cf_index CHARSET=UTF8;
#进入数据库
USE cf_index;
#创建index主页的轮播表（编号，名称，路径，下标文字）
CREATE TABLE broadcast(
    sid INT,
    name VARCHAR(8),
    route VARCHAR(16),
    abc VARCHAR(8)
);
#往broadcast表中插入数据
INSERT INTO broadcast VALUES("1","lun1","../img/lun1.jpg","12件永久免费送");
INSERT INTO broadcast VALUES("2","lun2","../img/lun2.jpg","6月勇往直前");
INSERT INTO broadcast VALUES("3","lun3","../img/lun3.jpg","CFPL");
INSERT INTO broadcast VALUES("4","lun4","../img/lun4.jpg","6月百宝箱");
INSERT INTO broadcast VALUES("5","lun5","../img/lun5.jpg","限量神奇限时抢");
INSERT INTO broadcast VALUES("6","lun6","../img/lun6.jpg","枪王自助餐");
INSERT INTO broadcast VALUES("7","lun7","../img/lun7.jpg","周边商城特惠");

#登录数据库
#进入数据库
USE cf_index;
#创建index主页的登录表（账户ID，账户密码，账户性别，账户昵称，账户生日）
CREATE TABLE login(
    sid INT,
    uname VARCHAR(8),
    upwd VARCHAR(16),
    sex VARCHAR(1),
    classname VARCHAR(16),
    birthday VARCHAR(12),
);
#往broadcast表中插入数据
INSERT INTO broadcast VALUES("1","lun1","../img/lun1.jpg","12件永久免费送");
INSERT INTO broadcast VALUES("2","lun2","../img/lun2.jpg","6月勇往直前");
INSERT INTO broadcast VALUES("3","lun3","../img/lun3.jpg","CFPL");
INSERT INTO broadcast VALUES("4","lun4","../img/lun4.jpg","6月百宝箱");
INSERT INTO broadcast VALUES("5","lun5","../img/lun5.jpg","限量神奇限时抢");
INSERT INTO broadcast VALUES("6","lun6","../img/lun6.jpg","枪王自助餐");
INSERT INTO broadcast VALUES("7","lun7","../img/lun7.jpg","周边商城特惠");

#登录数据库
#进入数据库
USE cf_index;
#创建index主页的登录表（账户ID，账户密码，账户性别，账户昵称，账户生日）
CREATE TABLE login(
    sid INT,
    uname VARCHAR(8),
    upwd VARCHAR(16),
    sex VARCHAR(1),
    classname VARCHAR(16),
    birthday VARCHAR(12),
);
#往broadcast表中插入数据
INSERT INTO broadcast VALUES("1","lun1","../img/lun1.jpg","12件永久免费送");
INSERT INTO broadcast VALUES("2","lun2","../img/lun2.jpg","6月勇往直前");
INSERT INTO broadcast VALUES("3","lun3","../img/lun3.jpg","CFPL");
INSERT INTO broadcast VALUES("4","lun4","../img/lun4.jpg","6月百宝箱");
INSERT INTO broadcast VALUES("5","lun5","../img/lun5.jpg","限量神奇限时抢");
INSERT INTO broadcast VALUES("6","lun6","../img/lun6.jpg","枪王自助餐");
INSERT INTO broadcast VALUES("7","lun7","../img/lun7.jpg","周边商城特惠");#登录数据库
#进入数据库
USE cf_index;
#创建index主页的登录表（账户ID，账户密码，账户性别，账户昵称，账户生日）
CREATE TABLE login(
    sid INT,
    uname VARCHAR(8),
    upwd VARCHAR(16),
    sex VARCHAR(1),
    classname VARCHAR(16),
    birthday VARCHAR(12),
);
#往broadcast表中插入数据
INSERT INTO broadcast VALUES("1","lun1","../img/lun1.jpg","12件永久免费送");
INSERT INTO broadcast VALUES("2","lun2","../img/lun2.jpg","6月勇往直前");
INSERT INTO broadcast VALUES("3","lun3","../img/lun3.jpg","CFPL");
INSERT INTO broadcast VALUES("4","lun4","../img/lun4.jpg","6月百宝箱");
INSERT INTO broadcast VALUES("5","lun5","../img/lun5.jpg","限量神奇限时抢");
INSERT INTO broadcast VALUES("6","lun6","../img/lun6.jpg","枪王自助餐");
INSERT INTO broadcast VALUES("7","lun7","../img/lun7.jpg","周边商城特惠");