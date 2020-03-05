-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2020 at 02:57 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `connectwith`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `projectId` text NOT NULL,
  `msg_from` varchar(30) NOT NULL,
  `msg_from_name` text NOT NULL,
  `msg` text NOT NULL,
  `msg_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `projectId`, `msg_from`, `msg_from_name`, `msg`, `msg_date`) VALUES
(76, '5d4903b35321522a0855f2e1', '5d4083f1e25bcf00f81d7469', 'Shivanshu Gupta', 'hello', 'Thu Aug 08 2019 06:27:34 GMT-0700 (Pacific Daylight Time)'),
(77, '5d4903b35321522a0855f2e1', '5d4083f1e25bcf00f81d7469', 'Shivanshu Gupta', 'h', 'Thu Aug 08 2019 06:27:40 GMT-0700 (Pacific Daylight Time)'),
(78, '5d4903b35321522a0855f2e1', '5d4083f1e25bcf00f81d7469', 'Shivanshu Gupta', 'How area you', 'Thu Aug 08 2019 06:32:07 GMT-0700 (Pacific Daylight Time)'),
(79, '5d4903b35321522a0855f2e1', '5d4083f1e25bcf00f81d7469', 'Shivanshu Gupta', 'YouTube', 'Mon Sep 02 2019 00:07:01 GMT-0700 (Pacific Daylight Time)'),
(80, '', '', '', 'hello', 'Tue Feb 25 2020 19:12:31 GMT-0800 (Pacific Standard Time)'),
(81, '', '', '', 'how are you', 'Tue Feb 25 2020 19:12:54 GMT-0800 (Pacific Standard Time)'),
(82, '', '', '', 'how\'s u doing', 'Tue Feb 25 2020 19:13:15 GMT-0800 (Pacific Standard Time)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
