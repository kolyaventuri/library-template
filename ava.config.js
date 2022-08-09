export default {
  extensions: {
    ts: 'module',
    tsx: 'module'
  },
  nodeArguments: [
		"--loader=ts-node/esm",
    "--experimental-specifier-resolution=node"
  ],
  files: [
    'test/**/*.test.ts'
  ],
  require: [
    'ts-node/register',
    'tsconfig-paths/register',
  ]
}
