/* eslint-disable @typescript-eslint/no-inferrable-types */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export interface DevSkimSettings {
	enableCriticalSeverityRules: boolean;
	enableImportantSeverityRules: boolean;
	enableModerateSeverityRules: boolean;
	enableManualReviewSeverityRules: boolean;
	enableBestPracticeSeverityRules: boolean;
	enableHighConfidenceRules: boolean;
	enableMediumConfidenceRules: boolean;
	enableLowConfidenceRules: boolean;
	suppressionDurationInDays: number;
	suppressionCommentStyle: string;
	manualReviewerName: string;
	ignoreFiles: string[];
	ignoreRulesList: string[];
	guidanceBaseURL: string;
	removeFindingsOnClose: boolean;
	ignoreDefaultRules: boolean;
	customRulesPaths: string[];
	customLanguagesPath: string;
	customCommentsPath: string;
	scanOnOpen: boolean;
	scanOnSave: boolean;
	scanOnChange: boolean;
	traceServer: boolean;
}

export class DevSkimSettingsObject implements DevSkimSettings {
	enableCriticalSeverityRules = true;
	enableImportantSeverityRules = true;
	enableModerateSeverityRules = true;
	enableManualReviewSeverityRules = true;
	enableBestPracticeSeverityRules = true;
	enableHighConfidenceRules = true;
	enableMediumConfidenceRules = true;
	enableLowConfidenceRules = false;
	suppressionDurationInDays = 30;
	suppressionCommentStyle = "line";
	manualReviewerName = "";
	ignoreFiles: string[] = [];
	ignoreRulesList: string[] = [];
	guidanceBaseURL = "https://github.com/Microsoft/DevSkim/Guidance";
	removeFindingsOnClose = false;
	ignoreDefaultRules = false;
	customRulesPaths: string[] = [];
	customLanguagesPath = "";
	customCommentsPath = "";
	scanOnOpen = true;
	scanOnSave = true;
	scanOnChange = true;
	traceServer = false;
}
