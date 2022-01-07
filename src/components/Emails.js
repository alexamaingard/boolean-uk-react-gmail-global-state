import { Email } from "./Email";

export const Emails = props => {
	const { filteredEmails, setEmails } = props;

	return (
		<main className="emails">
			<ul>
				{filteredEmails.map((email, index) => (
					<Email email={email} index={index} setEmails={setEmails} />
				))}
			</ul>
		</main>   
	)
}