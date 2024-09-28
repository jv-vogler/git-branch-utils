<h1 align="center"><span style="color: lime;">G</span>it <span style="color: lime;">B</span>ranch <span style="color: lime;">U</span>tils</h1>
<p align="center">
<img alt="npm version" src="https://img.shields.io/npm/v/gbu.svg">
<img alt="GBU" src="https://img.shields.io/npm/l/gbu.svg">
</p>

<h3 align="center">Manage your local git branches with ease.</h3>

<p align="center">
  <img src="/docs/gbu-example.gif" />
</p>

A tool heavily inspired by [npkill](https://github.com/voidcosmos/npkill) that offers a simple interface for tasks like deleting or renaming local branches.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

<a name="features"></a>

# :rocket: Features

- [x] Delete/restore local branches (during session).
- [ ] Toggle delete/restore all branches (except current).
- [ ] Rename local branches.
- [ ] Restore deleted branches even after quitting.

<a name="requirements"></a>

# :pushpin: Requirements

- **[Git](https://git-scm.com/downloads)**
- **[Node.js](https://nodejs.org/en)** >= 20.17.0

You can check by running the following commands:

### Checking Git version

```bash
$ git -v
```

```
git version 2.46.2
```

### Checking Node.js version

```bash
$ node -v
```

```
v20.17.0
```

<a name="installation"></a>

# :floppy_disk: Installation

Run it without installing.

```bash
$ npx gbu
```

Or install it globally.

```bash
$ npm i -g gbu
```

<a name="usage"></a>

# :wrench: Usage

Currently, there are no special options. Just run:

```bash
$ gbu
```

or

```bash
$ npx gbu
```

<a name="contributing"></a>

# :handshake: Contributing

WIP

<a name="license"></a>

# :scroll: License

MIT © [JV Vogler](https://github.com/jv-vogler).

---
