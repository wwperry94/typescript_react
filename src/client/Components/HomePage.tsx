import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage: React.FC = (props: HomeProps) => {
	const [chirpsArr, setChirp] = useState<chirp[]>([]);
	const [readOnly, setReadOnly] = useState<Boolean>(true);

	const getChirp = async () => {
		let res = await fetch('/api/chirps');
		let chirpsArr = await res.json();
		console.log("chirp", chirpsArr);
		setChirp(chirpsArr.reverse());
	}

	const deleteChirp = async (id: string) => {
		console.log("ID", id);
		await fetch(`/api/chirps/${id}`, {
			method: "DELETE",
			body: JSON.stringify(id),

		});
		getChirp();
	}
	const cardContent = (name: string, text: string) => {
		if (readOnly) {
			return (
				<div>
					<h5 className="card-title">{name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{text}</h6>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
	useEffect(() => {
		getChirp();
	}, []);


	return (
		<Router>
			<div>
				<div>
					{chirpsArr.map((item) => {
						return (
							<div key={item.id} className="card">
								<div className="card-body">
									<Link
										to={{ pathname: `/chirp/${item.id}/Admin`, state: {} }}
										className="btn btn-secondary"

									> Admin Options </Link>
									{cardContent(item.name, item.text)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</Router>
	);
};

export default HomePage

interface HomeProps { }

interface HomeState {
	chirps: []
}

interface chirp {
	id: string,
	name: string,
	text: string
}