// import './PrivacyPolicy.css';
import { Link } from 'react-router-dom';
import './TermsConditions.css'

const TermsConditions = (props) => {
    const currentUser = localStorage.getItem('toDoCurrentUser')
    return (<>
        {!currentUser &&
            <div className='termsConditionsHeader'>
                <Link to='/login'><div className="termsConditions"><h4>DCR-A1AT-201: Conditional Follow-Up Portal</h4></div></Link>
            </div>
        }
        <div className="termsConditionsConainer container mt-5 mb-5">
            <div className='textContainer row justify-content-center'>
                <div className="termsConditions">
                    <div className="termsConditionsBackBtn">
                            <Link to="/login" className="back-button">
                                <div className='backBtnTerms'></div> Back
                            </Link>
                        <h2>Terms of Use</h2>
                    </div>
                    <hr />
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text">
                                <h4>General</h4>
                                <p>
                                    The present Terms of Use constitute a legally binding agreement between you (hereafter interchangeably referred to as “You” or “Your”) PCT Lab Research (PCT) (hereafter interchangeably referred to as “PCT”, "Us", "We", or "Our") regarding Your use of a web-based online Electronic Data Collection and Monitoring System specifically designed for Haemonetics Corp. (“hereinafter referred to as “Client”), including any information, data, text, video, audio, pictures messaging and/or any other functionality and/or content contained therein, including, without limitation, when placed on, downloaded or  added into the system by You (together, the “Content”), as well as any underlying databases, software and/or technology made available for use via the provided system (hereafter  altogether referred to as the “System”). Our Privacy Policy, contained in a separate document, form an unalienable part of these Terms of Use.
                                </p>
                                <p>
                                    By accessing to or using the System You explicitly and irrevocably agree to be bound by these Terms of Use. PCT reserves the right to seek all remedies available by law for any violation of these Terms of Use.
                                </p>
                                <p>
                                    Please read these Terms of Use (including the Privacy Policy) carefully. Please do not access, login or start using the System anyhow if You have not done so, or if You do not agree to any of these Terms of Use.
                                </p>
                                <h4>The PCT Name and Emblem. Ownership</h4>
                                <p>The PCT name and emblem are the exclusive property of PCT. They are protected under international and US laws. Unauthorized use is prohibited. They may not be copied or reproduced or otherwise used in any way without the prior written permission of PCT. </p>
                                <p>
                                    The name, emblem, codes, underlying software, databases, servers, as well as all right, title and interest in and to the Systemand all uses thereof, including without limitation all copyright, trademark, patent and other intellectual property rights therein, shall be and remain solely with PCT or its respective licensors, and may not be used without PCT’s express written permission. The System may only be accessed through user accounts generated by Us and any unauthorized use of the System, its content, name and/or emblem is prohibited. The arrangements for generating and/or accessing Your user account shall be made between You and Client.
                                </p>
                                <p>
                                    The ownership of analytical or other data, information inputted into the System, as well as any data, information or other output generated within or through use of the System generally belongs to the Client and is not subject to these Terms of Use. In any case PCT has no right, title or interest in and to such data.
                                </p>
                                <p>
                                    At the same time, You do not acquire any ownership rights over any data or information by using the System.
                                </p>
                                <h4>The System</h4>
                                <p>The System was developed and designed by PCT for Client and can be used for studies conducted by Client within its business activities. The System belongs to PCT and neither the Client nor You do not acquire any ownership or intellectual property rights in and to the System, any of its components (including its underlying software) by registering and/or accessing and/or using the System through generated user account. The System is developed and designed for medical institutions, staff and/or doctors aimed at providing an online system to input medical and/or health data, medical treatment results, medical output and/or any other patient related information from various clinical trials of medicines, analyze such data and export respective reports as per categories and cases of all clinical trials conducted and registered via the System. </p>
                                <p>The System is accessible through individual user accounts created and managed by PCT. Particularly, PCT generates and/or creates individual user accounts with their respective logins and passwords for and in the number of users requested by the Client. The number of requested accounts, as well as any relations between the Client and PCT are governed by private contractual relations between the Client and PCT and are outside the scope of applicability of these Terms of Use. </p>
                                <p>The patients subject to clinical trials of medicine are not identified within the System and are referred to by using Individual Patient Number that are allocated to them randomly and prior to inputting their data into the System. The System also provides a possibility to review the input data internally, analyze it and/or export reports upon necessity.</p>
                                <h4>Updates and Modifications</h4>
                                <p>The applicable features or tools of the System are designed and developed by PCT on the basis of its criteria provided and/or approved by the Client. The System is evolving, and PCT reserves the right to update the System with or without prior notice for any reason, in its sole discretion, including but not limited to these Terms of Use. The PCT also reserves the right, upon request of the Client, to modify and/or change the System. If You continue to use the System (irrespective of PCT giving You a designated notice as mentioned above) following the posting of updates, changes or modifications, You thereby explicitly and irrevocably agree to and accept updates, changes or modifications. Except as otherwise stated, all amended terms shall automatically be effective immediately when initially posted. No amendment to the Terms of Use or Privacy Policy shall apply to any dispute of which We had actual notice before the date of the amendment. </p>
                                <p>If You at any point do not agree to any portion of then-current Terms of Use.</p>
                                <h4>Getting access into the System</h4>
                                <p>In order to register and access the individual account within the System a Request to generate login and password shall be submitted to PCT. </p>
                                <p>PCT creates/generates the login and password for the Users and sends them to the Client via e-mail.</p>
                                <p>The provided login and password are distributed among the employees, partners, associates, management or other staff members of the Client, as well as various medical institutions and doctors as per separate agreements and contracts that are not subject to terms and conditions of these Terms of Use and Privacy Policy attached hereto. We do not interfere and bear any responsibility as to provision, dissemination or distribution of logins and passwords by the Client. We do not control or anyhow monitor the compliance of ultimate users to these Terms of Use and/or Privacy Policy. The Users of System may at any time, upon their sole discretion, change the passwords for their respective accounts.</p>
                                <h4>Use of the System and Medical Data Processing</h4>
                                <p>For the purposes of using the System no personally indefinable information is requested by the PCT or otherwise submitted into the System. </p>
                                <p>The System is accessed and used only via user accounts created by the PCT and does not require any additional registration, authentication or initialization. </p>
                                <p>Any analytical or other data, information or statistical output generated within or through use of the System derives from data from medical institutions, staff and/or doctors which is inputted by them directly into the System through their respective individual user accounts. </p>
                                <p>Inputted data relate to the following: (1) medical and/or health data, (2) data on disease and their treatment procedure, (3) information on vitals of patients, (4) information on complications, if any, (5) medical output, (6) medical treatment results, (7) types, names, effects, application and other consumption details of medicine undergoing trials, (8) steps and procedure of clinical trials and/or any other patient related information from various clinical trials of medicines, (9) other information relevant to clinical trials (hereinafter jointly referred to as “Medical Data”). </p>
                                <p>The patients undergoing clinical trials of medicines are referred to only via their Individual Patient Number within the System. The System does not gather, process or transfer any personally identifiable information and/or data regarding the patients. </p>
                                <p>Individual Patient Number is assigned to the patient undergoing clinical trials of medicines randomly by the respective medical institutions, staff and/or doctors prior to inputting their Medical Data into the System.  Such Individual Patient Number does not comply with any regularity or pattern. </p>
                                <p>Inputted Medical Data is used only for analytical and research purposes and for generating various reports through the System. Such reports may be generated only by the Client. </p>
                                <p>All the Medical Data may be used by Us in accordance with these Terms of Use (including, particularly, the Privacy Policy). The whole responsibility to ensure that the Medical Data is true, accurate, current and complete lies with You.</p>
                                <p>Our Terms of Use along with Privacy Policy do not regulate the relations between the patients undergoing clinical trials of medicines and the medical institutions, staff and/or doctors who collect, use, transfer or disclose, as may be applicable, the gathered Medical Data. Any agreements, data processing consents or other related documents required for data processing, including its collection, use, transfer or disclosure shall be ensured separately and independently by You or by the relevant medical institutions, staff and/or doctors. </p>
                                <h4>Limited License to use</h4>
                                <p>Subject to Your acceptance of these Terms of Use, You are granted a non-exclusive, revocable, limited, non-transferable and non-sub-licensable right to access and use the System solely for the purposes described herein (“License”). You undertake not to use the System for any other purpose.</p>
                                <p>You acknowledge and agree that Your License does not include: (a) alteration, modification, revision, other transformation, creation of derivative works from or otherwise making any derivative uses of the System or any information or content therein; (b) decompilation, reverse engineering or otherwise attempting to derive the source code for the System (except to the extent applicable laws specifically prohibit restriction of such activities); or (c) any use of the System other than for its intended purpose as expressly stated in these Terms of Use.</p>
                                <p>Unless explicitly stated herein, nothing in these Terms of Use shall be construed as conferring any license to intellectual property, proprietary or other rights, whether by estoppel, implication or otherwise.</p>
                                <p>Any use of the System other than as specifically authorized herein, without Our prior written permission, is strictly prohibited and will terminate the License granted herein, and may subject You to liability for violations of law.</p>
                                <p>For the purposes of determining Your compliance with the License and enforcing these Terms of Use, We may: (a) review the Medical Data for purposes of ensuring its compliance with the applicable rules of safety, security, morality, child protection and/or compliance with any applicable laws and regulations and these Terms of Use and/or elimination of any kind of incompliance, breach and/or abuse thereof, (b) suspend and/or delete Your account for any violation of these Terms of Use and/or Privacy Policy. </p>
                                <h4>Suspension and Termination of Access to and Use of the System</h4>
                                <p>You have the right to suspend or terminate Your access to or Your use of the System or any part thereof at any time. If You do not agree to these Terms of Use, Your sole and exclusive remedy is not to use the System. You understand and agree that stopping your use of the System is Your sole and exclusive remedy with respect to any dispute with Us.</p>
                                <p>We reserve the right to stop offering and/or supporting the System or any part thereof, including the created user accounts at any time either permanently or temporarily. In such event Your License to use the System or a part thereof will be automatically terminated or suspended.</p>
                                <p>We may also terminate Your access to the System with or without notice to You, if We (in our sole discretion) deem that You have violated these Terms of Use or have otherwise caused or may cause damage to Us or any third party.</p>
                                <h4>Conduct Requirements and Restrictions</h4>
                                <p>Your use of and access into the System is subject to all applicable national and international laws and regulations, and You agree not to violate such laws and regulations in Your use of and access into the System. In addition, You agree that: (a) You will not interfere with another user’s use and enjoyment of the System; (b) You will not interfere with or disrupt the System security measures; (c) You will not interfere with or disrupt networks connected to the System and will comply with all regulations, policies and procedures of such networks; (d) You will comply with applicable laws regarding the transmission of technical data exported and imported to and from different jurisdictions in accordance with these Terms of Use with respect to or relating to any of Your dealings with the System; (e) You will not use the System to engage in any illegal conduct; (f) You will acquire all necessary agreements and/or consents (at your own initiative, cost and responsibility) from patients undergoing clinical trials of medicine (or otherwise ensure that such agreements and/or consents are acquired) prior to collecting, using, transferring or disclosing their Medical Data; (g) When accessing into or using the System You shall at all times comply with these Terms of Use and applicable laws and regulations.</p>
                                <p>As a condition of use of the System, You promise that: (a) You will not use the System in the event You have not reached the age permissible for use of the System in Your jurisdiction; (b) You will not use the System for any purpose that is in violation with public or moral rights, including, without limitation, (i) deceiving, misleading, abusing, harassing, intimidating any other user; (ii) attempting to restrict other users from using the System; (iii) transmitting or causing to be transmitted any content that is deceitful, misleading, defamatory, libelous, hateful, profane; (iv) transmitting or causing to be transmitted any communication intended to obtain password, account, personal information of other users;  (v) uploading or attaching files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another user’s computer; (vi) deleting any author attributions, legal notices or proprietary designations or labels in any file that is uploaded; (vii) falsifying the origin of source of software or other material contained in a file that is uploaded; (viii) downloading any file posted by another user that the user knows, or reasonably should know, cannot be legally distributed in such manner; (c) You will not violate any intellectual property rights of third parties.</p>
                                <p>At the same time, We accept no responsibility or liability in respect of any of Your conduct in connection with your use of the System and/or any Medical Data submitted by You on the System including, for example, responsibility or liability for the accuracy or reliability of any information, data, opinions, advice or statements made in such material.</p>
                                <p>You also agree to defend, indemnify and hold harmless PCT, as well as their founders, subsidiaries, affiliates, officers, employees and independent contractors from any loss, liability, damages and expenses (including, without limitation, legal fees) resulting from any claim or demand made by any third party arising out of or in connection with Your use of the System, Your violation of these Terms of Use, or Your violation of the rights of any third party.</p>
                                <h4>Technical problems</h4>
                                <p>There may be occasions where the System may be interrupted, or any other technical difficulties may occur in connection with Your access to and use of the System. You acknowledge that in such cases We shall bear no liability for any suspension, discontinuation or interruption of the System. </p>
                                <h4>Disclaimer</h4>
                                <p>YOU EXPRESSLY AGREE THAT USE OF THE SYSTEM IS AT YOUR SOLE RISK, AND IS PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE DISCLAIM ANY LIABILITY OR RESPONSIBILITY ARISING FROM YOUR USE OF THE SYSTEM OR THE MEDICAL DATA INPUTTED INTO THE SYSTEM. PCT AND MEMBERS OF THEIR STAFF, THEIR AFFILIATES AND  THEIR CONTRACTORS, SHALL NOT BE LIABLE FOR ANY FINANCIAL OR OTHER CONSEQUENCES  WHATSOEVER ARISING FROM YOUR USE OF THE SYSTEM OR FROM THEMEDICAL DATA INPUTTED IN THE SYSTEM, INCLUDING THE INAPPROPRIATE, IMPROPER OR FRAUDULENT USE OF THE SYSTEM OR SUCH MEDICAL DATA. NO REPRESENTATIONS AND WARRANTIES OF ANY KIND CONCERNING THE SYSTEM ARE GIVEN, INCLUDING RESPONSIBILITY FOR ANY INFECTION BY VIRUS OR ANY OTHER CONTAMINATION OR BY ANYTHING WHICH HAS DESTRUCTIVE PROPERTIES, AND FURTHERMORE, ANY AND ALL WARRANTIES, EXPRESS, IMPLIED OR STATUTORY REGARDING THE WEBSITE OR THE USE THEREOF BY YOU TO THE FULL EXTENT PERMITTED BY LAW. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, PCT DOES NOT MAKE, AND HAS  NOT MADE, ANY REPRESENTATION OR WARRANTY THAT THE SYSTEM IS ACCURATE, COMPLETE, RELIABLE, CURRENT, ERROR-FREE, FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS OR NOT INTERFERE WITH OTHER FUNCTIONS, FEATURES OR SERVICES ON YOUR DEVICE WITH WHICH YOU ARE ACCESSING THE WEBSITE. </p>
                                <p>YOU EXPRESSLY AGREE THAT PCT MAKES NO REPRESENTATION AND GIVES NO WARRANTY, EITHER EXPRESS OR IMPLIED, AS TO THE ACCURACY OR TRUTHFULNESS OF ANY INFORMATION PLACED ON THE SYSTEM BY ACCOUT USERS, AND CANNOT BE HELD LIABLE IN CONNECTION THERETO. </p>
                                <h4>Limitation of Liability</h4>
                                <p>YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMISSIBLE BY LAW, THE LIMITATION OF LIABILITY CONTAINED HEREIN APPLIES TO ANY AND ALL APPLICATIONS OR INJURIES WHATSOEVER CAUSED BY OR RELATED TO USE OF, OR INABILITY TO USE, THE SYSTEM UNDER ANY CAUSE OR ACTION WHATSOEVER OF ANY JURISDICTION, INCLUDING, WITHOUT LIMITATION, ACTIONS FOR BREACH OF WARRANTY, BREACH OF CONTRACT OR TORT (INCLUDING NEGLIGENCE).  PCT, INCLUDING ITS SUBSIDIARIES, AFFILIATES, OR ANY OF THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS OR AGENTS,  SHALL NOT BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY INDIRECT, ACTUAL, INCIDENTAL, PUNITIVE, SPECIAL OR CONSEQUENTIAL DAMAGES, LOST INCOME, REVENUE OR PROFITS, LOST OR DAMAGED DATA AS A RESULT OF COMMUNICATION AND COOPERATION THROUGH OUR SYSTEM, EVEN IF ANY OF THOSE PERSONS OR ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR SUCH DAMAGES ARE FORESEEABLE.</p>
                                <p>SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, THE LIABILITY OF PCT SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.</p>
                                <h4>Miscellaneous</h4>
                                <p>The formation, construction and interpretation of these Terms of Use, and Your use of the System, shall be governed by the laws of State of Massachusetts, giving no effect to choice of law provisions. </p>
                                <p>Any dispute not covered by these Terms of Use and relating to these Terms of Use shall be subject to the review and final settlement by the courts of State of Massachusetts with applicability of laws of State of Massachusetts. Decisions of the Arbitration Court are final and binding upon You.</p>
                                <p>If You violate these Terms of Use or if You engage in any conduct that We, in Our sole discretion, believe is in violation of any applicable law or is otherwise harmful to the interests of PCT or any third party, We  may choose to immediately suspend or terminate Your access into or Your use of the System or any part thereof without any prior notice sent to You. </p>
                                <p>If any provision of these Terms of Use is held to be unlawful, void or for any reason unenforceable, that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of the remaining provisions. These Terms of Use constitute Your entire agreement with PCT with respect to their subject matter, and supersede any other previous written terms and any oral or promotional statements regarding such subject matter. Any other matters as to Your access to, registration within or use of the System shall be regulated with the Client on separate contractual basis and do not form a subject matter of these Terms of Use or Privacy Policy attached hereto. At the same time, You acknowledge, that the relations between the Client and PCT also are not governed by these Terms of Use. Any waiver of enforcement of any provision of these Terms of Use or any breach thereof, in any one instance, shall not constitute a waiver of such term or condition or any subsequent breach thereof. If any dispute arises under these Terms of Use, the prevailing party shall be reimbursed by the other party for any and all legal fees and costs associated therewith.</p>
                                <h4>Contact Information.</h4>
                                <p>If You have any questions about these Terms of Use, please feel free to contact Us online as specified within the System or by e-mail at info@pctlabresearch.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default TermsConditions;