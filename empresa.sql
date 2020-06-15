-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 15-06-2020 a las 07:10:52
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `ciudad` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id`, `nombre`, `ciudad`) VALUES
(1, 'Diseño responsive', 'Leon'),
(2, 'Financiero y económico', 'Barcelona'),
(3, 'Producto', 'Valencia'),
(5, 'Administracion', 'Coruña'),
(9, 'UX', 'Valencia'),
(12, 'Desarrollo web', 'Barcelona'),
(13, 'Direccion', 'Valencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `sexo` enum('M','F') DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `fecha_incorporacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `salario` decimal(6,2) UNSIGNED DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `fk_departamento` int(11) NOT NULL,
  `jefe_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `dni`, `sexo`, `fecha_nacimiento`, `fecha_incorporacion`, `salario`, `cargo`, `fk_departamento`, `jefe_id`) VALUES
(1, 'Lucia', '0000056789', 'F', '1980-10-12', '2020-05-27 13:24:02', '3500.00', 'Jefa de cuentas', 5, NULL),
(4, 'Andreita', '76351834D', 'F', '1978-09-01', '2008-01-11 23:00:00', '2700.00', 'Jefecilla', 2, 1),
(5, 'Gema', '0000006345', 'F', '1987-10-12', '2004-11-19 23:00:00', '3000.00', 'contable', 2, 6),
(6, 'Teresa', '0000003456', 'F', '1990-01-12', '2019-01-11 23:00:00', '6000.00', 'Director contable', 2, NULL),
(7, 'Jesus', '0000003456', 'M', '1992-10-12', '2020-01-11 23:00:00', '2500.00', 'Jefa de producto', 3, 8),
(8, 'Elias', '0000568768', 'M', '1971-01-12', '2020-05-27 13:24:02', '6000.00', 'Director producto', 3, NULL),
(9, 'Tamara', '0000678876', 'F', '1981-10-12', '2010-01-11 23:00:00', '2500.00', 'secretaria de direccion', 1, 10),
(12, 'Juliana', '99826471D', 'F', '1988-10-01', '2020-06-14 15:43:02', '2800.00', 'Jefecilla', 3, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_empleados_departamento_idx` (`fk_departamento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `fk_empleados_departamento` FOREIGN KEY (`fk_departamento`) REFERENCES `departamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
