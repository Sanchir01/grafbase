import { config, g } from '@grafbase/sdk'

const User = g.model('User', {
	name: g.string().length({ min: 2, max: 100 }),
	email: g.string().unique(),
	avatarUrl: g.string(),
	description: g.string().optional(),
	githubUrl: g.url().optional(),
	linkedInbUrl: g.url().optional(),
	projects: g.relation(() => Project).list().optional()
})

const Project = g.model('Project', {
	title: g.string().length({ min: 2 }),
	description: g.string(),
	image: g.string(),
	liveSiteUrl: g.url(),
	githubUrl:g.url(),
	category:g.string().search(),
	createBy: g.relation(() => User)
})

export default config({
	schema: g
	
})
