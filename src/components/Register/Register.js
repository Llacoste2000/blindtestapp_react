import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import ButtonLarge from "../Buttons/Large/ButtonLarge";
import FormLink from "../FormLink/FormLink";
import "../../assets/styles/FormStyles.css";

export default function Register() {
	return (
		<div className="form__wrapper">
			<div className="form__group">
				<Label>Email</Label>
				<Input inputPlaceholder="john.doe@gmail.com" type="email" />
			</div>
			<div className="form__group">
				<Label>Mot de passe</Label>
				<Input inputPlaceholder="abc123*" type="password" />
			</div>
			<div className="form__group">
				<Label>Confirmer</Label>
				<Input inputPlaceholder="abc123*" type="password" />
			</div>
			<div className="form__group center">
				<ButtonLarge>S'inscrire</ButtonLarge>
			</div>
			<div className="form__group center">
				<FormLink path="/login">Déjà inscrit ?</FormLink>
			</div>
		</div>
	);
}
