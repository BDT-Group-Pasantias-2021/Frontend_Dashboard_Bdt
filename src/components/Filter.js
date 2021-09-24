import React from 'react';

// Components
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function Filter() {
	return (
		<div className="mid-section-row col-12">
			<div className="section-container">
				<div className="filter-section">
					<div className="standard-section-title">Buscar por intervalo de fechas</div>
					<Formik
						initialValues={{
							primer_fecha: '',
							segunda_fecha: '',
						}}
						validate={(values) => {
							const errors = {};
							return errors;
						}}
						onSubmit={async (values) => {
							alert(JSON.stringify(values, null, 2));
							/* Axios.post('http://localhost:3001/Rasn/admin/faq/actualizar-pregunta', values)
							.then((res) => {
								console.log(res.data);
							})
							.then(alert('Registro actualizado')); */
						}}
					>
						<Form className="dates-form" style={{ padding: 0 }} id="mainForm">
							<div className="form-container">
								<div className="form-fields">
									<div className="date-container col-12 col-sm-6" style={{ paddingRight: '7.5px' }}>
										<Field
											className="date-field col-12 col-sm-6"
											type="date"
											name="primer_fecha"
											placeholder=""
											required
										/>
										<ErrorMessage className="input-error" name="pregunta" component="div" />
									</div>
									<div className="date-container col-12 col-sm-6" style={{ paddingLeft: '7.5px' }}>
										<Field
											className="date-field col-12 col-sm-6"
											type="date"
											name="segunda_fecha"
											placeholder=""
											required
										/>
										<ErrorMessage className="input-error" name="respuesta" component="div" />
									</div>
								</div>
								<button type="submit" className="btn-submit-form">
									Buscar
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
}
