-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 15, 2022 at 09:24 PM
-- Server version: 8.0.31
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `backend_class`
--

CREATE TABLE `backend_class` (
  `course_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` date NOT NULL,
  `classroom` varchar(100) NOT NULL,
  `start_time` time NOT NULL,
  `duration` float NOT NULL,
  `message` text NOT NULL,
  `zoom_link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `backend_class`
--

INSERT INTO `backend_class` (`course_id`, `date`, `classroom`, `start_time`, `duration`, `message`, `zoom_link`) VALUES
('COMP3278', '2022-11-21', 'MWT2', '14:30:00', 1, 'Welcome to COMP3278A! The slides and videos of the lectures and tutorials will be released. The slides are \".pdf\" files with one slide on one page (1-by-1 scheme). Please print multiple pages (slides) on one paper in order to play green. Thanks for saving papers!', 'https://hku.zoom.us/j/96226740999?pwd=ZER1UUdxSVVhQzNXbXFkUDd3WjRBdz09');

-- --------------------------------------------------------

--
-- Table structure for table `backend_course`
--

CREATE TABLE `backend_course` (
  `course_code` varchar(100) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `lecturer` varchar(100) NOT NULL,
  `information` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `backend_course`
--

INSERT INTO `backend_course` (`course_code`, `course_name`, `lecturer`, `information`) VALUES
('COMP3278', 'Introduction To Database Management Systems', 'Luo Ping', 'This course studies the principles, design, administration, and implementation of database management systems. Topics include: entity-relationship model, relational model, relational algebra, database design and normalization, database query languages, indexing schemes, integrity and concurrency control.');

-- --------------------------------------------------------

--
-- Table structure for table `backend_loginhist`
--

CREATE TABLE `backend_loginhist` (
  `login_time` datetime NOT NULL,
  `student_id` int NOT NULL,
  `time_stayed` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `backend_loginhist`
--

INSERT INTO `backend_loginhist` (`login_time`, `student_id`, `time_stayed`) VALUES
('2022-10-28 16:45:20', 1, '02:10:05');

-- --------------------------------------------------------

--
-- Table structure for table `backend_material`
--

CREATE TABLE `backend_material` (
  `course_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `note_id` int NOT NULL,
  `note_title` varchar(100) NOT NULL,
  `note_type` varchar(100) NOT NULL,
  `note_link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `backend_material`
--

INSERT INTO `backend_material` (`course_id`, `note_id`, `note_title`, `note_type`, `note_link`) VALUES
('COMP3278', 1, 'Lecture 1 intro to DBMS', 'lecture', 'https://moodle.hku.hk/mod/resource/view.php?id=2665229');

-- --------------------------------------------------------

--
-- Table structure for table `backend_student`
--

CREATE TABLE `backend_student` (
  `student_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `face_images` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `backend_student`
--

INSERT INTO `backend_student` (`student_id`, `name`, `email`, `face_images`) VALUES
(1, 'adrian', 'adriansocool@gmail.com', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `backend_class`
--
ALTER TABLE `backend_class`
  ADD PRIMARY KEY (`date`),
  ADD KEY `course_code` (`course_id`);

--
-- Indexes for table `backend_course`
--
ALTER TABLE `backend_course`
  ADD PRIMARY KEY (`course_code`);

--
-- Indexes for table `backend_loginhist`
--
ALTER TABLE `backend_loginhist`
  ADD PRIMARY KEY (`login_time`),
  ADD KEY `student_loginhist` (`student_id`);

--
-- Indexes for table `backend_material`
--
ALTER TABLE `backend_material`
  ADD PRIMARY KEY (`note_id`),
  ADD KEY `course_code` (`course_id`) USING BTREE;

--
-- Indexes for table `backend_student`
--
ALTER TABLE `backend_student`
  ADD PRIMARY KEY (`student_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `backend_class`
--
ALTER TABLE `backend_class`
  ADD CONSTRAINT `course_class` FOREIGN KEY (`course_id`) REFERENCES `backend_course` (`course_code`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `backend_loginhist`
--
ALTER TABLE `backend_loginhist`
  ADD CONSTRAINT `student_loginhist` FOREIGN KEY (`student_id`) REFERENCES `backend_student` (`student_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `backend_material`
--
ALTER TABLE `backend_material`
  ADD CONSTRAINT `material_course` FOREIGN KEY (`course_id`) REFERENCES `backend_course` (`course_code`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
