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

# Heildamm Components

**Production-Ready React Component Library with Schema-Based Validation and Type Safety**

Heildamm Components provides a comprehensive, professionally-structured component library built with React 19, TypeScript, and Zod validation. Each component is organized hierarchically by category, includes schema-based prop validation, and follows industry best practices for maintainability and scalability.

---

## Overview

Modern component libraries require clear architectural patterns, consistent file organization, and robust type safety. Heildamm Components eliminates the setup burden by providing a fully-configured component library structure with functional, production-ready components that demonstrate architectural excellence.

### Key Features

- **Hierarchical Component Organization**: Components organized into logical categories (overlays, layout, navigation, typography)
- **Zod Schema-Based Validation**: All component props validated using Zod schemas for runtime safety
- **Full TypeScript Support**: Complete type inference and compile-time safety
- **React 19 Compatible**: Built with modern React features including React Server Components support
- **Tailwind CSS Integration**: Utility-first styling with Tailwind CSS pre-configured
- **Modular Architecture**: Each component is self-contained with its own schema and exports
- **ESLint Configuration**: Professional code quality standards built-in
- **Zero Unnecessary Comments**: Clean, self-documenting code

---

## Installation

### Prerequisites

- Node.js version 18.0.0 or higher
- Package manager: pnpm, npm, or yarn

### Quick Start

```bash
git clone https://github.com/your-org/heildamm-components.git
cd heildamm-components
pnpm install
```

### Development Server

```bash
pnpm dev
```

The development environment starts at `http://localhost:3000`

### Production Build

```bash
pnpm build
pnpm start
```

---

## Project Structure

The component library is organized into logical categories, each containing self-contained components with schemas and type definitions:

```
src/
├── components/
│   ├── navigation/          # Navigation and interaction components
│   │   └── button/
│   │       ├── Button.tsx
│   │       ├── schema.ts
│   │       └── index.ts
│   ├── overlays/            # Overlay and surface components
│   │   ├── card/
│   │   │   ├── Card.tsx
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   └── input/
│   │       ├── Input.tsx
│   │       ├── schema.ts
│   │       └── index.ts
│   ├── layout/              # Layout and structural components
│   │   ├── container/
│   │   │   ├── Container.tsx
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   ├── grid/
│   │   │   ├── Grid.tsx
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   ├── stack/
│   │   │   ├── Stack.tsx
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── typography/          # Text and typographic components
│   │   ├── heading/
│   │   │   ├── Heading.tsx
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   ├── text/
│   │   │   ├── Text.tsx
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── chart/               # Data visualization components
│   └── index.ts
├── schemas/
│   ├── common.ts            # Shared schema definitions
│   ├── validation.ts        # Validation utilities
│   └── index.ts
├── hooks/
├── utilities/
├── types/
└── index.ts
```

---

## Component Categories

### Navigation Components

Components for user navigation and interaction.

**Available Components**:

- **Button**: Interactive button component with variants and sizes

---

### Overlay Components

Components for surfaces, overlays, and form inputs.

**Available Components**:

- **Card**: Container component with styling and layout options
- **Input**: Text input field with validation and error states

---

### Layout Components

Components for creating responsive layouts and spacing.

**Available Components**:

- **Container**: Responsive container with configurable max-widths
- **Grid**: CSS Grid-based layout component with configurable columns
- **Stack**: Flexbox-based component for vertical and horizontal layouts

---

### Typography Components

Components for text rendering and typographic hierarchies.

**Available Components**:

- **Heading**: Semantic heading component supporting levels 1-6
- **Text**: Text component with typography variants (body, caption, code)

---

### Chart Components

Data visualization components (expandable category).

---

## Usage Examples

### Importing Components

```typescript
import { Button } from "@heildamm/components/navigation/button";
import { Card } from "@heildamm/components/overlays/card";
import { Stack } from "@heildamm/components/layout/stack";
```

### Basic Component Usage

```typescript
import { Button, ButtonPropsSchema } from '@heildamm/components';

export function MyComponent() {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={() => console.log('Clicked')}
    >
      Click Me
    </Button>
  );
}
```

### Using Stack for Layouts

```typescript
import { Stack } from '@heildamm/components/layout/stack';
import { Button } from '@heildamm/components/navigation/button';

export function ButtonGroup() {
  return (
    <Stack direction="row" gap="md" align="center">
      <Button>Save</Button>
      <Button>Cancel</Button>
    </Stack>
  );
}
```

### Using Grid for Responsive Layouts

```typescript
import { Grid } from '@heildamm/components/layout/grid';
import { Card } from '@heildamm/components/overlays/card';

export function CardGrid() {
  return (
    <Grid columns={3} gap="lg">
      <Card>Product 1</Card>
      <Card>Product 2</Card>
      <Card>Product 3</Card>
    </Grid>
  );
}
```

### Schema Validation

```typescript
import { validateProps } from "@heildamm/components";
import { ButtonPropsSchema } from "@heildamm/components/navigation/button";

const props = {
  variant: "primary",
  size: "lg",
  disabled: false,
};

const result = validateProps(ButtonPropsSchema, props);

if (!result.success) {
  console.error("Validation failed:", result.error);
} else {
  console.log("Valid props:", result.data);
}
```

---

## Schema-Based Architecture

Every component includes a corresponding schema file that defines and validates component props using Zod:

```typescript
// src/components/navigation/button/schema.ts
export const ButtonPropsSchema = BaseComponentPropsSchema.extend({
  variant: ButtonVariantSchema.optional(),
  size: ButtonSizeSchema.optional(),
  disabled: z.boolean().optional(),
  onClick: z.function().optional(),
});

export type ButtonProps = z.infer<typeof ButtonPropsSchema>;
```

This approach ensures:

- **Runtime Type Safety**: Props are validated at runtime
- **IDE Support**: Full TypeScript autocomplete and type checking
- **Documentation**: Schemas serve as executable documentation
- **Validation Composition**: Schemas can be composed and extended

---

## TypeScript Configuration

The project utilizes strict TypeScript settings for maximum type safety:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "jsx": "react-jsx",
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"]
  }
}
```

---

## Development Workflow

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

### 3. Create New Component

Follow the established pattern:

1. Create component subfolder under appropriate category
2. Implement component in `ComponentName.tsx`
3. Create `schema.ts` with Zod validation
4. Export from `index.ts`

### 4. Build Components

```bash
pnpm build
```

### 5. Run Linting

```bash
pnpm lint
```

---

## Component Props Reference

### Base Component Props

All components inherit these base properties:

| Prop          | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| `className`   | string | Additional CSS classes      |
| `testId`      | string | Test identifier for testing |
| `id`          | string | HTML element identifier     |
| `data-testid` | string | Data attribute for testing  |

### Button Component Props

| Prop       | Type                                                 | Default   | Description          |
| ---------- | ---------------------------------------------------- | --------- | -------------------- |
| `variant`  | 'primary' \| 'secondary' \| 'ghost' \| 'destructive' | 'primary' | Button style variant |
| `size`     | 'sm' \| 'md' \| 'lg' \| 'xl'                         | 'md'      | Button size          |
| `disabled` | boolean                                              | false     | Disabled state       |
| `loading`  | boolean                                              | false     | Loading state        |
| `onClick`  | function                                             | undefined | Click handler        |

### Stack Component Props

| Prop        | Type                                                  | Default   | Description           |
| ----------- | ----------------------------------------------------- | --------- | --------------------- |
| `direction` | 'row' \| 'column'                                     | 'column'  | Flex direction        |
| `gap`       | 'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'        | 'md'      | Spacing between items |
| `align`     | 'start' \| 'center' \| 'end' \| 'stretch'             | 'stretch' | Alignment             |
| `justify`   | 'start' \| 'center' \| 'end' \| 'between' \| 'around' | 'start'   | Justification         |

---

## Code Quality Standards

The project maintains professional code quality through:

- **ESLint**: Comprehensive linting rules for code consistency
- **TypeScript**: Strict type checking and inference
- **Prettier**: Code formatting standards (integrated with ESLint)
- **Zero Comments Policy**: Code is written to be self-documenting

---

## System Requirements

| Requirement | Version  |
| ----------- | -------- |
| Node.js     | ≥ 18.0.0 |
| pnpm        | ≥ 8.0.0  |
| TypeScript  | ≥ 5.0.0  |
| React       | ≥ 19.0.0 |

---

## Technology Stack

| Technology   | Purpose                        |
| ------------ | ------------------------------ |
| Next.js      | React framework and dev server |
| React 19     | UI library                     |
| TypeScript   | Type-safe development          |
| Tailwind CSS | Utility-first styling          |
| Zod          | Schema validation              |
| ESLint       | Code quality and consistency   |
| PostCSS      | CSS processing                 |

---

## Best Practices

### Component Development

- Maintain the established folder structure for consistency
- Always include a corresponding schema file for prop validation
- Use `React.forwardRef` for DOM element access where appropriate
- Export both the component and its types from the index file

### Props and Types

- Define props schema in `schema.ts` using Zod
- Infer TypeScript types from schemas using `z.infer<typeof Schema>`
- Never define interfaces in component files
- Use schema composition for shared properties

### File Organization

- Keep component implementation focused and readable
- Place styling logic within the component or Tailwind classes
- Use semantic HTML elements
- Maintain consistent naming conventions

### Documentation

- Self-documenting code through clear naming
- Schemas serve as executable documentation
- Type inference provides IDE assistance
- Examples demonstrate usage patterns

---

## Troubleshooting

### Build Failures

Ensure all dependencies are installed and versions are compatible:

```bash
pnpm install --force
pnpm build
```

### TypeScript Errors

Clear TypeScript cache and rebuild:

```bash
rm -rf .next
pnpm build
```

### Port Already in Use

Specify an alternative development port:

```bash
pnpm dev -- -p 3001
```

---

## Contributing Guidelines

Contributions are welcome. Please adhere to:

1. Maintain the established component structure and naming conventions
2. Include schema definitions for all components
3. Follow TypeScript strict mode requirements
4. Ensure ESLint passes without errors
5. Write self-documenting code with no unnecessary comments

---

## License

MIT License - See LICENSE file for complete terms

---

## Support and Contact

For questions, issues, or suggestions regarding Heildamm Components:

**Documentation**: Check individual component files for implementation examples
