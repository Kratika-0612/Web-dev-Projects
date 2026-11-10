
const categoryPermissions = {
    social: ["camera", "microphone", "location", "contacts"],

    communication: ["microphone", "contacts", "phone"],

    entertainment: ["microphone", "storage"],

    shopping: ["location"],

    education: ["camera", "microphone", "storage"],

    utility: ["location", "storage"]
};

const contextDependentPermissions = {
    entertainment: ["camera"],
    shopping: ["location", "sms","storage"],
    communication: ["storage", "sms"]
};

function analyze(selectedPermissions, category) {

    const results = [];
    const allowedPermissions = categoryPermissions[category];

    selectedPermissions.forEach(permission => {

        switch (permission) {

            case "camera": {
                const pinfo = permissionsData.find(p => p.name === "Camera");

               if (allowedPermissions.includes("camera")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });   
                }
                else if (contextDependentPermissions[category]?.includes("camera")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"Camera access depends on the app's features. It may be needed for video recording or editing, but is generally unnecessary for simply watching content."
                    });   
            }
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,   
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }

            case "microphone": {
                const pinfo = permissionsData.find(p => p.name === "Microphone");

                if (allowedPermissions.includes("microphone")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });
                } else if(contextDependentPermissions[category]?.includes("microphone")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"Microphone access depends on the app's features. It may be needed for voice commands or audio recording, but is generally unnecessary for simply watching content."
                    });
                }
                
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }

            case "location": {
                const pinfo = permissionsData.find(p => p.name === "Location");

                if (allowedPermissions.includes("location")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });
                } else if(contextDependentPermissions[category]?.includes("location")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"It may be needed for location-based services, but is generally unnecessary for simply watching content."
                    });
                }
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }

            case "contacts": {
                const pinfo = permissionsData.find(p => p.name === "Contacts");

                if (allowedPermissions.includes("contacts")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });
                } else if(contextDependentPermissions[category]?.includes("contacts")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"It may be needed for social features, but is generally unnecessary for simply watching content."
                    });
                }
                
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }

            case "storage": {
                const pinfo = permissionsData.find(p => p.name === "Storage / Photos");

                if (allowedPermissions.includes("storage")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });
                } else if(contextDependentPermissions[category]?.includes("storage")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"It may be needed for storage-related features."
                    });
                } 
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }

            case "sms": {
                const pinfo = permissionsData.find(p => p.name === "SMS");

                if (allowedPermissions.includes("sms")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });
                }else if(contextDependentPermissions[category]?.includes("sms")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"It may be needed for messaging features in applications which require SMS functionality like otp verification"
                    });
                }
                
                
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }

            case "phone": {
                const pinfo = permissionsData.find(p => p.name === "Phone");

                if (allowedPermissions.includes("phone")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Relevant"
                    });
                } else if(contextDependentPermissions[category]?.includes("phone")) {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Contextually Dependent",
                        message:"It may be needed for phone-related features in applications which require phone functionality like calling or messaging"
                    });
                }
                
                else {
                    results.push({
                        permission: pinfo.name,
                        risk: pinfo.risk,
                        description: pinfo.description,
                        purpose: pinfo.purpose,
                        status: "Potentially Unnecessary"
                    });
                }
                break;
            }
        }
    });

    return results;
}
