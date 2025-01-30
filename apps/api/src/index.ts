import { defineAbilityFor } from '@next-rbac/auth';

const ability = defineAbilityFor({ role: 'MEMBER' });

console.log(ability.can('delete', 'User'));
