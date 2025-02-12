<div align="center">
  <img src="./logo.png" width="250">
  <hr>
</div>

<p align="center">
   <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
   <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
</p>

## Description

This is a full-stack monolithic project developed for study purposes, featuring the implementation of [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control) access control rules, authentication, and [multi-tenant](https://en.wikipedia.org/wiki/Multitenancy) support.
</br>

## Technologies

The project was developed using the following technologies
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/learn)
- [Turborepo](https://turbo.build/)
- [CaslJS](https://casl.js.org/v6/en/)
- [Zod](https://zod.dev/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)


## Features

### Authentication
- [ ] It should be able to authenticate using e-mail & password;
- [ ] It should be able to authenticate using Github account;
- [ ] It should be able to recover password using e-mail;
- [x] It should be able to create an account (e-mail, name and password);

### Organizations
- [ ] It should be able to create a new organization;
- [ ] It should be able to get organizations to which the user belongs;
- [ ] It should be able to update an organization;
- [ ] It should be able to shutdown an organization;
- [ ] It should be able to transfer organization ownership;

### Invites
- [ ] It should be able to invite a new member (e-mail, role);
- [ ] It should be able to accept an invite;
- [ ] It should be able to revoke a pending invite;

### Members
- [ ] It should be able to get organization members;
- [ ] It should be able to update a member role;

### Projects
- [ ] It should be able to get projects within a organization;
- [ ] It should be able to create a new project (name, url, description);
- [ ] It should be able to update a project (name, url, description);
- [ ] It should be able to delete a project;

### Billing
- [ ] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role);

## RBAC
Roles & permissions.

### Roles
- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table
|                          | Administrator | Member | Billing | Anonymous |
| ------------------------ | ------------- | ------ | ------- | --------- |
| Update organization      | ✅            | ❌     | ❌      | ❌        |
| Delete organization      | ✅            | ❌     | ❌      | ❌        |
| Invite a member          | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite         | ✅            | ❌     | ❌      | ❌        |
| List members             | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership       | ⚠️            | ❌     | ❌      | ❌        |
| Update member role       | ✅            | ❌     | ❌      | ❌        |
| Delete member            | ✅            | ⚠️     | ❌      | ❌        |
| List projects            | ✅            | ✅     | ✅      | ❌        |
| Create a new project     | ✅            | ✅     | ❌      | ❌        |
| Update a project         | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project         | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details      | ✅            | ❌     | ✅      | ❌        |
| Export billing details   | ✅            | ❌     | ✅      | ❌        |
> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions

#### Conditions
- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;

## API docs
To access the API documentation and learn more about the routes, simply go to /docs in the project.

##  Author

<img width="150" height="150" src="https://github.com/cleitonAmbrosini.png" />

##### Cleiton A. Ambrosini
###### _Software Engineer_

[![Linkedin Badge](https://img.shields.io/badge/Cleiton%20Ambrosini-blue?style=flat-square&logo=linkedin&labelColor=blue)](mailto:cleiton.ambro@gmail.com)
[![Gmail Badge](https://img.shields.io/badge/-cleiton.ambro@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cleiton.ambro@gmail.com)](https://www.linkedin.com/in/cleitonambrosini/)