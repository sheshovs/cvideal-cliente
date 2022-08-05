import { combineReducers } from "redux";
import { certificateReducer } from "./certificateReducer";
import {
	cvCertificateReducer,
	cvExperienceReducer,
	cvLanguageReducer,
	cvProjectReducer,
	cvReducer,
	cvSkillReducer,
	cvStudyReducer,
} from "./cvReducer";
import { experienceReducer } from "./experienceReducer";
import { languageReducer } from "./languageReducer";
import { loginReducer } from "./loginReducer";
import { projectReducer } from "./projectReducer";
import { skillReducer } from "./skillReducer";
import { studyReducer } from "./studyReducer";
import { templateReducer } from "./templateReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
	useUser: userReducer,
	useTemplate: templateReducer,
	useStudy: studyReducer,
	useSkill: skillReducer,
	useProject: projectReducer,
	useLanguage: languageReducer,
	useExperience: experienceReducer,
	useCertificate: certificateReducer,
	useCv: cvReducer,
	useCvProject: cvProjectReducer,
	useCvStudy: cvStudyReducer,
	useCvSkill: cvSkillReducer,
	useCvLanguage: cvLanguageReducer,
	useCvExperience: cvExperienceReducer,
	useCvCertificate: cvCertificateReducer,
	useLoginSidebar: loginReducer,
});
