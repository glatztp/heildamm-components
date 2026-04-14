<div align="center">
<pre style="color: #8e61c6; background: transparent; border: none; font-weight: bold; line-height: 1.2;">
                                         ░▒▓▓▒░                                                    
                                        ░▒▓▓▓▓░    ▒▓▓▓▒                                           
                                        ░▒▓▓▓▓░    ▒▓▓▓▓░                                          
                                        ░▒▓▓▓▓▓▒░  ▒▓▓▓▓░                                          
                                        ░▒▓▓▓▓▓▓▓▓▒▒▓▓▓▓░                                          
                                        ░▒▓▓▓▓▒▓▓▓▓▓▓▓▓▓░                                          
                                        ░▒▓▓▓▓  ░▓▓▓▓▓▓▓░                                          
                                        ░▒▓▓▓▓    ░▒▓▓▓▓░                                          
                                        ░▒▓▓▓▓░    ▒▓▓▓▓░                                          
                                        ░▒▓▓▓▓     ▒▓▓▓▓░                                          
                                         ░▓▓▓▓░    ▒▓▓▓▓░                                          
                                             ░░     ▒▓▒▒░                                          
</pre>
</div>

# Contributing to Heildamm Components

**Thank you for considering contributing to Heildamm Components.** We welcome contributions from developers of all skill levels. This document provides guidelines and instructions for participating in this project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Standards](#component-standards)
- [Testing Requirements](#testing-requirements)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Contact and Communications](#contact-and-communications)

---

## Code of Conduct

This project adheres to a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards in all interactions within this community.

---

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher
- Git version control system
- Basic understanding of React and TypeScript

### Setting Up Your Development Environment

1. **Fork the Repository**

   ```bash
   git clone https://github.com/glatztp/heildamm-components.git
   cd heildamm-components
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start the Development Server**
   ```bash
   pnpm dev
   ```

---

## Development Workflow

### Creating New Components

All new components must follow the established architectural patterns:

1. **File Organization**: Components are organized hierarchically by category within `src/components/`

2. **Required Files for Each Component**:
   - `ComponentName.tsx` - React component implementation
   - `schema.ts` - Zod schema for prop validation
   - `index.ts` - Barrel export file

3. **Component Structure Example**:

   ```
   src/components/category/
   ├── component-name/
   │   ├── ComponentName.tsx
   │   ├── schema.ts
   │   └── index.ts
   └── index.ts
   ```

4. **Update Category Index**: Always update the category's `index.ts` to export new components

5. **Update Root Index**: Update `src/components/index.ts` to export from the category

### Running the Development Environment

```bash
pnpm dev
```

The development server provides hot module reloading for immediate feedback during development.

### Code Quality Tools

The project includes automated code quality tools:

- **ESLint**: Lint your code with `pnpm lint`
- **Type Checking**: Verify types with `pnpm type-check`
- **Building**: Test the production build with `pnpm build`

---

## Component Standards

All contributions must adhere to these standards:

### 1. TypeScript Implementation

- Use strict TypeScript (`strict: true` in tsconfig)
- Define all prop types explicitly
- Avoid using `any` type
- Use proper generics where applicable

### 2. Zod Schema Validation

Every component must include a Zod schema for prop validation:

```typescript
// schema.ts
import { z } from "zod";

export const ComponentNameSchema = z.object({
  label: z.string().min(1),
  disabled: z.boolean().optional().default(false),
  onClick: z.function().optional(),
});

export type ComponentNameProps = z.infer<typeof ComponentNameSchema>;
```

### 3. Component Implementation

```typescript
// ComponentName.tsx
import { ComponentNameSchema, type ComponentNameProps } from './schema';

export function ComponentName(props: ComponentNameProps): React.ReactElement {
  const validated = ComponentNameSchema.parse(props);

  return (
    // Your component JSX here
  );
}
```

### 4. Exports

```typescript
// index.ts
export { ComponentName } from "./ComponentName";
export { ComponentNameSchema, type ComponentNameProps } from "./schema";
```

### 5. Code Style Guidelines

- Use functional components with hooks
- Maintain consistent naming conventions
- Keep components focused and reusable
- Leverage Tailwind CSS for styling
- Avoid inline styles unless absolutely necessary
- Write self-documenting code with clear intent

### 6. Accessibility

- Include proper ARIA labels where applicable
- Ensure keyboard navigation support
- Maintain appropriate color contrast ratios
- Test with accessibility tools

---

## Testing Requirements

### Unit Testing

Before submitting a pull request, ensure:

1. Component renders without errors
2. Props are validated correctly by the schema
3. Event handlers execute properly
4. Component handles edge cases gracefully

### Manual Testing

1. Test the component in the development environment
2. Verify responsive behavior across device viewports
3. Test keyboard navigation and accessibility
4. Verify theme integration (if applicable)

---

## Commit Guidelines

Follow these guidelines for meaningful commit messages:

### Conventional Commits Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature or component
- `fix`: A bug fix or issue resolution
- `docs`: Documentation updates
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks and dependency updates

### Examples

```bash
git commit -m "feat(button): add loading state property"
git commit -m "fix(input): resolve placeholder text alignment issue"
git commit -m "docs: update component API documentation"
```

### Commit Message Guidelines

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit the first line to 50 characters
- Reference issues and pull requests when relevant

---

## Pull Request Process

### Before Submitting

1. **Update your branch** with the latest changes from main:

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run all checks locally**:

   ```bash
   pnpm lint
   pnpm type-check
   pnpm build
   ```

3. **Test your changes thoroughly** in the development environment

### Pull Request Submission

1. **Create a descriptive title** that summarizes your changes

2. **Complete the pull request template** with:
   - Clear description of changes
   - Related issue references
   - Type of change (feature, bug fix, documentation)
   - Testing performed

3. **Ensure your branch is up-to-date** with the default branch

4. **Submit the pull request** for review

### Review Process

- Maintainers will review your submission within 5-7 business days
- Address feedback and requested changes promptly
- Maintain a professional and constructive tone in discussions
- Be patient and understanding during the review process

### Approval and Merging

- Minimum of one approval from project maintainers
- All checks must pass
- Your branch must be up-to-date with main
- Follow any specific merging instructions provided

---

## Contact and Communications

### Asking Questions

- Use GitHub Discussions for general questions
- Check existing issues before creating new ones
- Provide context and reproducible examples

### Reporting Issues

- Include clear, descriptive titles
- Provide steps to reproduce
- Include relevant environment information
- Share code snippets when applicable

### Feature Requests

- Explain the use case and problem statement
- Describe the proposed solution
- Discuss alternative approaches

---

## License

By contributing to Heildamm Components, you agree that your contributions will be licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Recognition

Contributors who make significant, valuable contributions to this project will be recognized in the project documentation and changelog. We appreciate your dedication to improving this library.

---

**Thank you for contributing to Heildamm Components!**
