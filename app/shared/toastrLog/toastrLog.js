(function() {
	"use strict";

	angular
		.module("cleanflightConfigurator")
		.config([
			"$provide",
			function($provide) {
				// Use the `decorator` solution to substitute or attach behaviors to
				// original service instance; @see angular-mocks for more examples....

				$provide.decorator("$log", [
					"$delegate",
					function($delegate) {
						// Save the original $log.debug()
						var logFn = $delegate.log;

						$delegate.log = function() {
							var args = [].slice.call(arguments);
							//now = DateTime.formattedNow();

							// Prepend timestamp
							// args[0] = supplant("{0} - {1}", [now, args[0]]);

							//toastr.info(args[0]);


							// Call the original with the output prepended with formatted timestamp
							logFn.apply(null, args);
						};

						// Save the original $log.debug()
						var infoFn = $delegate.info;

						$delegate.info = function() {
							var args = [].slice.call(arguments);
							//now = DateTime.formattedNow();

							// Prepend timestamp
							// args[0] = supplant("{0} - {1}", [now, args[0]]);

							toastr.info(args[0]);

							// Call the original with the output prepended with formatted timestamp
							infoFn.apply(null, args);
						};

						// Save the original $log.debug()
						var warnFn = $delegate.warn;

						$delegate.warn = function() {
							var args = [].slice.call(arguments);
							//now = DateTime.formattedNow();

							// Prepend timestamp
							// args[0] = supplant("{0} - {1}", [now, args[0]]);

							toastr.warning(args[0]);

							// Call the original with the output prepended with formatted timestamp
							warnFn.apply(null, args);
						};

						// Save the original $log.debug()
						var errorFn = $delegate.error;

						$delegate.error = function() {
							var args = [].slice.call(arguments);
							//now = DateTime.formattedNow();

							// Prepend timestamp
							//args[0] = supplant("{0} - {1}", [now, args[0]]);

							toastr.error(args[0]);

							// Call the original with the output prepended with formatted timestamp
							errorFn.apply(null, args);
						};

						// Save the original $log.debug()
						var debugFn = $delegate.debug;

						$delegate.debug = function() {
							var args = [].slice.call(arguments);
							//now = DateTime.formattedNow();

							// Prepend timestamp
							// args[0] = supplant("{0} - {1}", [now, args[0]]);

							toastr.success(args[0]);

							// Call the original with the output prepended with formatted timestamp
							debugFn.apply(null, args);
						};

						return $delegate;
					}
				]);
			}
		]);

})();
