const getAll = () => {
    return new Promise ((resolve,reject) => {
        db.query('select * from empleados', (err, rows) => {
            if (err) reject(err);
            resolve (rows);
        });
    });
};

const addEmpleado = ({nombre, dni, sexo, fecha_nacimiento, salario, cargo, fk_departamento, jefe_id}) => {
    return new Promise ((resolve, reject) => {
        db.query ('insert into empleados (nombre, dni, sexo, fecha_nacimiento, salario, cargo, fk_departamento,jefe_id, fecha_incorporacion) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, dni, sexo,fecha_nacimiento, salario, cargo, fk_departamento, jefe_id, new Date()],
        (err, result) => {
            if (err) reject (err);
            resolve (result);
        });
    });
};

const getById = (pEmpleadoId) => {
    return new Promise((resolve, reject) => {
      db.query('select * from empleados where id = ?', [pEmpleadoId], (err, rows) => {
        if (err) reject(err);
        if (rows.length !== 1) reject('El id_empleado no existe');
        resolve(rows[0]);
      })
    })
  }

const deleteById = (pEmpleadoId) => {
    return new Promise ((resolve, reject) => {
        db.query('delete from empleados where id = ?', [pEmpleadoId], (err, result) => {
            if (err) reject (err);
            resolve (result);
        });
    });
}

const updateById = (pEmpleadoId, {nombre, dni, sexo, fecha_nacimiento, salario, cargo,fk_departamento, jefe_id }) => {
    return new Promise((resolve, reject) => {
      db.query('update empleados set nombre = ?, dni = ?, sexo = ?,fecha_nacimiento = ?, salario = ?, cargo= ?, fk_departamento = ?, jefe_id = ? where id = ?',
        [nombre, dni, sexo, fecha_nacimiento, salario, cargo, fk_departamento, jefe_id,pEmpleadoId],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
    });
  }

module.exports = {
    getAll, addEmpleado, getById, deleteById, updateById
}