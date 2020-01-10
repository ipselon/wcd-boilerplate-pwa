
export default {"authentication":{"listen-to-user-authentication":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"},"events":[{"name":"onApplicationStart","targets":[{"type":"userFunction","props":{"functionName":"usr.firebase.Auth.listenToAuthStateChanged"},"events":[{"name":"authStateError","targets":[{"type":"component","props":{"componentName":"usr.probes.QuickJsonView","componentInstance":"authUserDetailsView","propertyName":"data"}}]},{"name":"user","targets":[{"type":"component","props":{"componentName":"usr.probes.QuickJsonView","componentInstance":"authUserDetailsView","propertyName":"data"}}]}]}]}]}],"submit-user-sign-up":[{"type":"component","props":{"componentName":"usr.form.Button","componentInstance":"authSignUpButton"},"events":[{"name":"onClick","targets":[{"type":"userFunction","props":{"functionName":"usr.state.MemoryStorage.getFromMemory"},"events":[{"name":"storage","targets":[{"type":"userFunction","props":{"functionName":"usr.firebase.Auth.createUserWithEmailAndPassword","transformScript":"(outputObject) => {\n  return {\n    email: outputObject.userInputEmail,\n    password: outputObject.userInputPassword\n  };\n}"},"events":[{"name":"emptyEmail","targets":[{"type":"component","props":{"componentName":"usr.form.TextField","componentInstance":"authEmailInputField","propertyName":"error"}},{"type":"component","props":{"componentName":"usr.form.TextField","componentInstance":"authEmailInputField","propertyName":"helperText","transformScript":"(outputObject) => {\n  if (outputObject) {\n    return 'Email is empty';\n  }\n}"}}]},{"name":"emptyPassword","targets":[{"type":"component","props":{"componentName":"usr.form.TextField","componentInstance":"authPasswordInputField","propertyName":"error"}},{"type":"component","props":{"componentName":"usr.form.TextField","componentInstance":"authPasswordInputField","propertyName":"helperText","transformScript":"(outputObject) => {\n  if (outputObject) {\n    return 'Password is empty';\n  }\n}"}}]},{"name":"errorMessage","targets":[{"type":"component","props":{"componentName":"usr.probes.QuickJsonView","componentInstance":"authErrorDetails","propertyName":"data"}}]},{"name":"invalidEmail","targets":[{"type":"component","props":{"componentName":"usr.probes.QuickJsonView","componentInstance":"authUserDetailsView","propertyName":"data"}}]},{"name":"status","targets":[{"type":"component","props":{"componentName":"usr.probes.QuickJsonView","componentInstance":"authUserDetailsView","propertyName":"data"}}]},{"name":"user","targets":[{"type":"component","props":{"componentName":"usr.probes.QuickJsonView","componentInstance":"authUserDetailsView","propertyName":"data"}}]}]}]}]}]}]}],"validate-user-email":[{"type":"component","props":{"componentName":"usr.form.TextField","componentInstance":"authEmailInputField"},"events":[{"name":"onChange","targets":[{"type":"userFunction","props":{"functionName":"usr.state.MemoryStorage.saveInMemory","transformScript":"(outputObject) => {\n  return {\n    userInputEmail: outputObject.value\n  };\n}"}}]}]}],"validate-user-password":[{"type":"component","props":{"componentName":"usr.form.TextField","componentInstance":"authPasswordInputField"},"events":[{"name":"onChange","targets":[{"type":"userFunction","props":{"functionName":"usr.state.MemoryStorage.saveInMemory","transformScript":"(outputObject) => {\n  return {\n    userInputPassword: outputObject.value\n  };\n}"}}]}]}]},"start":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"}}]};
