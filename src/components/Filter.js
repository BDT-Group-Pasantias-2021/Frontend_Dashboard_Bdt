import React from 'react';
import Axios from 'axios';

// Components
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function Filter({ setDateInterval, setCuadroInformativo, setInfoPorcentajes }) {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();
	const formatedToday = yyyy + '-' + mm + '-' + dd;

	return (
		<div className="mid-section-row col-12">
			<div className="section-container">
				<div className="filter-section">
					<div className="standard-section-title">Buscar por intervalo de fechas</div>
					<Formik
						initialValues={{
							fechaInicio: '',
							fechaFin: formatedToday,
						}}
						validate={(values) => {
							const errors = {};
							return errors;
						}}
						onSubmit={async (values) => {
							setDateInterval(values);
							Axios.post('http://localhost:3001/getAuditoriaPorcentajes', values).then((res) => {
								setInfoPorcentajes(res.data);
							});

							Axios.post('http://localhost:3001/getAuditoriaCuadroInformativo', values).then((res) => {
								setCuadroInformativo(res.data);
							});
						}}
					>
						<Form className="dates-form" style={{ padding: 0 }} id="mainForm">
							<div className="form-container">
								<div className="form-fields">
									<div className="date-container col-12 col-sm-6" style={{ paddingRight: '7.5px' }}>
										<Field
											className="date-field col-12 col-sm-6"
											type="date"
											name="fechaInicio"
											placeholder=""
											required
										/>
										<ErrorMessage className="input-error" name="pregunta" component="div" />
									</div>
									<div className="date-container col-12 col-sm-6" style={{ paddingLeft: '7.5px' }}>
										<Field
											className="date-field col-12 col-sm-6"
											type="date"
											name="fechaFin"
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
