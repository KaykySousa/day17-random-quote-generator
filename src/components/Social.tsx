import GithubLogo from "../assets/logo-github.svg"
import LinkedinLogo from "../assets/logo-linkedin.svg"

export default function Social() {
	return (
		<div className="fixed right-4 bottom-4 flex gap-x-4">
			<a href="https://github.com/KaykySousa">
				<img src={GithubLogo} alt="Github" className="h-6 w-6" />
			</a>
			<a href="https://www.linkedin.com/in/kayky-de-sousa/">
				<img src={LinkedinLogo} alt="Linkedin" className="h-6 w-6" />
			</a>
		</div>
	)
}
