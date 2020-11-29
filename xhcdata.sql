-- --------------------------------------------------------
-- 主机:                           localhost
-- 服务器版本:                        5.7.26 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 nodepro 的数据库结构
CREATE DATABASE IF NOT EXISTS `nodepro` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nodepro`;

-- 导出  表 nodepro.books 结构
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsName` varchar(50) DEFAULT NULL,
  `goodsKind` varchar(50) DEFAULT NULL,
  `goodsPrice` varchar(50) DEFAULT NULL,
  `goodsID` varchar(50) DEFAULT NULL,
  `goodsDesc` varchar(500) DEFAULT NULL,
  `goodsImg` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- 正在导出表  nodepro.books 的数据：0 rows
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- 导出  表 nodepro.messager 结构
CREATE TABLE IF NOT EXISTS `messager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 正在导出表  nodepro.messager 的数据：0 rows
/*!40000 ALTER TABLE `messager` DISABLE KEYS */;
/*!40000 ALTER TABLE `messager` ENABLE KEYS */;

-- 导出  表 nodepro.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 正在导出表  nodepro.user 的数据：0 rows
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 nodepro.userinfo 结构
CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountnumber` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mailbox` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  nodepro.userinfo 的数据：0 rows
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` (`id`, `accountnumber`, `username`, `password`, `mailbox`, `tel`, `img`) VALUES
	(1, '666666', '231423R42', '777777', '543234567@qq.com', '18287879095', 'http://192.168.2.219:7001/public/img/xhc/用户.jpg'),
	(2, '000000', '43534523', '999999', '654322343@qq.com', '18295384756', 'http://192.168.2.219:7001/public/img/xhc/用户.jpg'),
	(3, '111222', '2342354', '222111', '667755443@qq.com', '18245769081', 'http://192.168.2.219:7001/public/img/xhc/用户.jpg'),
	(4, '111199', 'fsduhfdsj', '991111', '556644554@qq.com', '18285766234', 'http://192.168.2.219:7001/public/img/xhc/用户.jpg'),
	(5, '999888', 'w21iuehi32he', '888999', '932874223@qq.com', '18204954865', 'http://192.168.2.219:7001/public/img/xhc/数据库.png'),
	(6, '737373', '321432', '636363', '123137213@qq.com', '18233334444', 'http://192.168.2.219:7001/public/img/xhc/QQ截图20201126133747.png');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
