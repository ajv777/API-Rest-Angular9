const getAll = () => {
    return new Promise ((resolve,reject) => {
        db.query('select * from empleados', (err, rows) => {
            if (err) reject(err);
            resolve (rows);
        });
    });
};

const addEmpleado = ({nombre, dni, sexo, fecha_nacimiento, fecha_incorporacion, salario, cargo, fk_departamento, jefe_id}) => {
    return new Promise ((resolve, reject) => {
        db.query ('insert into empleados (nombre, dni, sexo, fecha_nacimiento,fecha_incorporacion, salario, cargo, fk_departamento, jefe_id) values (?,?,?,?,?,?,?,?,?)',
        [nombre, dni, sexo, fecha_nacimiento, fecha_incorporacion, salario, cargo, fk_departamento, jefe_id],
        (err, result) => {
            if (err) reject (err);
            resolve (result);
        });
    });
};

const deleteById = (pEmpleadoId) => {
    return new Promise ((resolve, reject) => {
        db.query('delete from empleados where id = ?', [pEmpleadoId], (err, result) => {
            if (err) reject (err);
            resolve (result);
        });
    });
}

const updateById = (pEmpleadoId, { nombre, dni, sexo, fecha_nacimiento, fecha_incorporacion, salario, cargo, fk_departamento, jefe_id }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update empleados set nombre = ?, dni = ?, sexo = ?, fecha_nacimiento = ?, fecha_incorporacion = ?, salario = ?, cargo = ?, fk_departamento = ?, jefe_id = ? where id = ?',
            [nombre, dni, sexo, fecha_nacimiento, fecha_incorporacion, salario, cargo, fk_departamento, jefe_id, pEmpleadoId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
}

module.exports = {
    getAll, addEmpleado, deleteById, updateById
}