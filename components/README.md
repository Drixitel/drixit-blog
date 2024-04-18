# Components

This directory contains all the components that are used in the application. Each component is a self-contained unit that can,
in general, be reused across the application.

The `ui/` directory contains components that are more general and can be used in many places. These are all sourced
from the [shadcn/ui](https://ui.shadcn.com/) library. In terms of heirarchy, the components in `ui/` could be thought
of as 'atoms' and components in this directory could be thought of as 'molecules'. Then, pages or larger components
defined in `app/` could be thought of as 'organisms'. This is a relatively common way to think about component heirarchy
in UI applications.

Other directories in this directory contain components that are more specific to their usecase. For example, the `scene/` directory
contains components that are used to render 3D elements.
